#!/usr/bin/env python3

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "index.html"
LOCALES = [
    "ar",
    "de-de",
    "el-gr",
    "es-es",
    "fr-fr",
    "is-is",
    "it-it",
    "ja-jp",
    "ko-kr",
    "nl-nl",
    "pl-pl",
    "zh-cn",
    "uk-ua",
]


def main() -> None:
    html = SOURCE.read_text(encoding="utf-8")

    for locale in LOCALES:
        locale_dir = ROOT / locale
        locale_dir.mkdir(exist_ok=True)
        (locale_dir / "index.html").write_text(html, encoding="utf-8")


if __name__ == "__main__":
    main()
