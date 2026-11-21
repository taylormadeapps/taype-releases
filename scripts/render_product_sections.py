"""Insert the shared TayPE, community and footer sections into product pages."""

import html
import json

from render_community import ROOT, TOKEN, render as render_community


def render_product_sections(template: str, *, extra_footer_links: str = "", taype_preview: str = "") -> str:
    catalogue = json.loads((ROOT / "locales/product-sections.en-GB.json").read_text(encoding="utf-8"))
    if not all(isinstance(value, str) and value.strip() for value in catalogue.values()):
        raise ValueError("Every shared product source-locale entry must be a nonempty string")

    fragments = {
        "meet_taype.section": (ROOT / "templates/meet-taype.html").read_text(encoding="utf-8"),
        "product_footer.section": (ROOT / "templates/product-footer.html").read_text(encoding="utf-8"),
    }
    values = {key: html.escape(value, quote=True) for key, value in catalogue.items()}
    values["footer.extra_links"] = extra_footer_links
    values["taype.preview"] = taype_preview
    used_keys = {key for fragment in fragments.values() for key in TOKEN.findall(fragment)}
    missing = used_keys - values.keys()
    unused = values.keys() - used_keys
    if missing or unused:
        raise ValueError(f"Shared product sections mismatch: missing={sorted(missing)}, unused={sorted(unused)}")

    rendered = {key: TOKEN.sub(lambda match: values[match[1]], fragment) for key, fragment in fragments.items()}
    rendered["community.section"] = render_community()
    for key, fragment in rendered.items():
        marker = "{{" + key + "}}"
        if template.count(marker) != 1:
            raise ValueError(f"Product page template must contain exactly one {marker}")
        template = template.replace(marker, fragment.rstrip("\n"))
    return template
