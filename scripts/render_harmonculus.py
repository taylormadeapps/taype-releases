#!/usr/bin/env python3
"""Render or check the Harmonculus product and licence pages."""

import argparse
import html
import json
import re
from pathlib import Path


PRODUCT = Path(__file__).resolve().parents[1] / "harmonculus"
TOKEN = re.compile(r"\{\{([a-zA-Z0-9_.]+)\}\}")
PAGES = (PRODUCT / "index.html", PRODUCT / "eula/index.html")


def render() -> dict[Path, str]:
    catalogue = json.loads((PRODUCT / "locales/en-GB.json").read_text(encoding="utf-8"))
    if not all(isinstance(value, str) and value.strip() for value in catalogue.values()):
        raise ValueError("Every Harmonculus source-locale entry must be a nonempty string")

    templates = {page: page.with_name("index.template.html").read_text(encoding="utf-8") for page in PAGES}
    used_keys = {key for template in templates.values() for key in TOKEN.findall(template)}
    missing = used_keys - catalogue.keys()
    unused = catalogue.keys() - used_keys
    if missing or unused:
        raise ValueError(f"Harmonculus catalogue mismatch: missing={sorted(missing)}, unused={sorted(unused)}")

    values = {key: html.escape(value, quote=True) for key, value in catalogue.items()}
    pages = {page: TOKEN.sub(lambda match: values[match[1]], template) for page, template in templates.items()}
    if any("{{" in source or "}}" in source for source in pages.values()):
        raise ValueError("Unresolved Harmonculus template token")
    return pages


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Refuse stale generated HTML without writing")
    args = parser.parse_args()
    for page, source in render().items():
        if args.check:
            if page.read_text(encoding="utf-8") != source:
                raise SystemExit(f"{page} is stale. Run scripts/render_harmonculus.py")
        else:
            page.write_text(source, encoding="utf-8")
    print("Harmonculus product and licence pages match their templates and source locale")


if __name__ == "__main__":
    main()
