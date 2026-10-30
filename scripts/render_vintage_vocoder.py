#!/usr/bin/env python3
"""Render the static Vintage Vocoder page from its source-locale catalogue."""

import argparse
import hashlib
import html
import json
import re
from pathlib import Path


PAGE = Path(__file__).resolve().parents[1] / "vintage-vocoder"
TOKEN = re.compile(r"\{\{([a-zA-Z0-9_.]+)\}\}")
RELEASES = "https://github.com/taylormadeapps/taype-releases/releases"


def render() -> str:
    catalogue = json.loads((PAGE / "locales/en-GB.json").read_text(encoding="utf-8"))
    release = json.loads((PAGE / "release.json").read_text(encoding="utf-8"))
    if not all(isinstance(value, str) and value for value in catalogue.values()):
        raise ValueError("Every source-locale entry must be a nonempty string")
    if not re.fullmatch(r"\d+\.\d+\.\d+", release["version"]):
        raise ValueError("Invalid Vintage Vocoder release version")
    if release["tag"] != f"vintage-vocoder-v{release['version']}":
        raise ValueError("Vintage Vocoder releases must use their own tag namespace")
    expected_name = rf"Vintage-Vocoder-{re.escape(release['version'])}-universal-\d{{8}}T\d{{6}}Z\.pkg"
    if not re.fullmatch(expected_name, release["filename"]):
        raise ValueError("Installer filename must identify this version and packaging run")
    if not re.fullmatch(r"[a-f0-9]{64}", release["sha256"]):
        raise ValueError("Invalid installer SHA-256")
    values = dict(catalogue)
    values["style.version"] = hashlib.sha256((PAGE / "style.css").read_bytes()).hexdigest()[:12]
    values.update({f"release.{key}": value for key, value in release.items() if isinstance(value, str)})
    values["release.download_url"] = f"{RELEASES}/download/{release['tag']}/{release['filename']}"
    values["release.notes_url"] = f"{RELEASES}/tag/{release['tag']}"
    windows = release["windows"]
    expected_windows = rf"Vintage-Vocoder-{re.escape(release['version'])}-windows-x86_64-beta-\d{{8}}T\d{{6}}Z\.exe"
    if not re.fullmatch(expected_windows, windows["filename"]):
        raise ValueError("Windows installer filename must identify this version and packaging run")
    if not re.fullmatch(r"[a-f0-9]{64}", windows["sha256"]):
        raise ValueError("Invalid Windows installer SHA-256")
    if not isinstance(windows["size"], str) or not windows["size"].strip():
        raise ValueError("Missing Windows installer download size")
    windows_url = f"{RELEASES}/download/{release['tag']}/{windows['filename']}"
    values["release.windows.size"] = windows["size"]
    values["release.windows.sha256"] = windows["sha256"]
    values["release.windows.download_url"] = windows_url
    values["release.windows.signature_url"] = f"{windows_url}.asc"
    linux = release["linux"]
    if not isinstance(linux, dict) or set(linux) != {"arm64", "x86_64"}:
        raise ValueError("Linux release metadata must include ARM64 and x86-64")
    for arch, asset in linux.items():
        expected = f"Vintage-Vocoder-{release['version']}-linux-{arch}.tar.gz"
        if asset["filename"] != expected:
            raise ValueError(f"Linux {arch} filename must identify this version and architecture")
        if not re.fullmatch(r"[a-f0-9]{64}", asset["sha256"]):
            raise ValueError(f"Invalid Linux {arch} SHA-256")
        if not isinstance(asset["size"], str) or not asset["size"].strip():
            raise ValueError(f"Missing Linux {arch} download size")
        values[f"release.linux.{arch}.size"] = asset["size"]
        values[f"release.linux.{arch}.download_url"] = f"{RELEASES}/download/{release['tag']}/{expected}"
    values["release.linux.checksums_url"] = (
        f"{RELEASES}/download/{release['tag']}/Vintage-Vocoder-{release['version']}-linux-SHA256SUMS.txt"
    )
    template = (PAGE / "index.template.html").read_text(encoding="utf-8")
    missing = set(TOKEN.findall(template)) - values.keys()
    unused = catalogue.keys() - set(TOKEN.findall(template))
    if missing or unused:
        raise ValueError(f"Catalogue mismatch: missing={sorted(missing)}, unused={sorted(unused)}")
    rendered = TOKEN.sub(lambda match: html.escape(values[match[1]], quote=True), template)
    if "{{" in rendered or "}}" in rendered:
        raise ValueError("Unresolved template token")
    return rendered


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Refuse stale generated HTML without writing")
    args = parser.parse_args()
    rendered = render()
    output = PAGE / "index.html"
    if args.check:
        if not output.exists() or output.read_text(encoding="utf-8") != rendered:
            raise SystemExit("Vintage Vocoder index.html is stale; run scripts/render_vintage_vocoder.py")
        print("Vintage Vocoder generated HTML matches its catalogue and release metadata")
    else:
        output.write_text(rendered, encoding="utf-8")
        print(f"Rendered {output}")


if __name__ == "__main__":
    main()
