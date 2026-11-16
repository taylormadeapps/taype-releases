function followProductLink() {
    const url = new URL(window.location.href);
    const productAnchors = new Set([
        "#philosophy", "#tone", "#arranger-flow", "#features", "#download",
        "#pricing", "#pricing-cadence-note", "#tape-sessions", "#community",
    ]);
    if (!url.searchParams.has("aff") && !url.searchParams.has("lang") && !productAnchors.has(url.hash)) {
        return false;
    }

    // The detailed page still owns affiliate consent, language selection and legacy deep links.
    url.pathname = "/product/";
    window.location.replace(url.href);
    return true;
}

const siteIsNavigating = followProductLink();
window.addEventListener("hashchange", followProductLink);
