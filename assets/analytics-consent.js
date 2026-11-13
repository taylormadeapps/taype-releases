(() => {
    const redirect = document.currentScript.hasAttribute("data-analytics-redirect");
    if (/^\/confirm(?:\/|$)/i.test(location.pathname)) return;
    // The landing page resolves its locale before this deferred script runs.
    if (typeof siteIsNavigating !== "undefined" && siteIsNavigating) return;

    const preferenceCookie = "taype_analytics";
    const cookieLifetime = 180 * 24 * 60 * 60;
    const measurementId = "G-R8KS5HWHXP";
    const disableAnalytics = `ga-disable-${measurementId}`;
    const analyticsCookies = ["_ga", `_ga_${measurementId.slice(2)}`];
    const consentDefaults = {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
    };

    let choice = readChoice();
    let tagStarted = false;
    let refreshControls = () => {};

    function readChoice() {
        const value = document.cookie.split(/;\s*/)
            .find((cookie) => cookie.startsWith(`${preferenceCookie}=`))
            ?.slice(preferenceCookie.length + 1);
        return value === "granted" || value === "denied" ? value : null;
    }

    function gtag() {
        window.dataLayer.push(arguments);
    }

    function analyticsReferrer() {
        if (!document.referrer) return "";
        const url = new URL(document.referrer);
        return url.origin === location.origin ? url.origin + url.pathname : url.origin;
    }

    function startAnalytics() {
        window[disableAnalytics] = false;
        if (tagStarted) {
            gtag("consent", "update", { analytics_storage: "granted" });
            return;
        }

        tagStarted = true;
        window.dataLayer = window.dataLayer || [];
        gtag("consent", "default", consentDefaults);
        gtag("set", {
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            cookie_domain: "none",
            cookie_expires: cookieLifetime,
            cookie_update: false,
            page_location: location.origin + location.pathname,
            page_referrer: analyticsReferrer(),
        });
        gtag("consent", "update", { analytics_storage: "granted" });
        gtag("js", new Date());

        const tag = document.createElement("script");
        tag.async = true;
        tag.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WTX8FCKT";
        tag.referrerPolicy = "origin";
        tag.addEventListener("error", () => console.warn("The Google Analytics container could not be loaded."));
        document.head.append(tag);
    }

    function stopAnalytics() {
        window[disableAnalytics] = true;
        if (tagStarted) gtag("consent", "update", consentDefaults);
        for (const name of analyticsCookies) {
            document.cookie = `${name}=; Path=/; Max-Age=0`;
        }
    }

    if (choice === "granted") startAnalytics();
    if (redirect) return;

    const changes = typeof BroadcastChannel === "function" ? new BroadcastChannel(preferenceCookie) : null;

    function syncChoice() {
        const saved = readChoice();
        if (saved === choice) return;
        choice = saved;
        if (choice === "granted") startAnalytics();
        else stopAnalytics();
        refreshControls();
    }

    changes?.addEventListener("message", syncChoice);
    window.addEventListener("pageshow", syncChoice);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") syncChoice();
    });

    function saveChoice(next) {
        const secure = location.protocol === "https:" ? "; Secure" : "";
        document.cookie = `${preferenceCookie}=${next}; Path=/; Max-Age=${cookieLifetime}; SameSite=Lax${secure}`;
        const saved = readChoice() === next;
        if (next === "denied") stopAnalytics();
        if (!saved) return false;

        if (next === "granted" && choice !== next) startAnalytics();
        choice = next;
        changes?.postMessage(null);
        return true;
    }

    async function mountControls() {
        const { analyticsCopy } = await import("./analytics-consent-copy.js");
        const language = document.documentElement.lang.toLowerCase().split("-")[0];
        const copy = analyticsCopy[language] || analyticsCopy.en;
        const settings = document.querySelector("[data-analytics-settings]");
        const banner = document.createElement("section");
        const actions = document.createElement("div");
        const status = document.createElement("p");
        const allow = document.createElement("button");
        const decline = document.createElement("button");
        const heading = document.createElement("h2");
        const description = document.createElement("p");
        const policy = document.createElement("a");
        const nav = document.querySelector("body > nav");
        const alignWithNav = () => {
            const inset = getComputedStyle(nav).position === "fixed" ? nav.offsetHeight : 0;
            banner.style.marginBlockStart = `${inset}px`;
        };
        const navSize = nav && !settings ? new ResizeObserver(alignWithNav) : null;

        banner.className = "analytics-consent";
        banner.setAttribute("aria-labelledby", "analytics-consent-title");
        heading.id = "analytics-consent-title";
        heading.textContent = copy.title;
        description.textContent = `${copy.description} `;
        policy.href = "/site-data/#analytics";
        policy.textContent = copy.settings;
        description.append(policy);

        actions.className = "analytics-consent-actions";
        allow.type = "button";
        decline.type = "button";
        allow.textContent = copy.allow;
        decline.textContent = copy.decline;
        status.className = "analytics-consent-status";
        status.setAttribute("role", "status");
        actions.append(allow, decline);
        if (settings) settings.append(actions, status);
        else banner.append(heading, description, actions, status);

        function render() {
            if (settings) {
                status.textContent = choice === "granted" ? copy.allowed : copy.disabled;
                return;
            }

            if (choice !== null) {
                navSize?.disconnect();
                banner.remove();
                return;
            }

            status.textContent = "";
            if (nav) {
                alignWithNav();
                nav.after(banner);
                navSize.observe(nav);
            } else {
                document.body.prepend(banner);
            }
        }

        function select(next) {
            if (!saveChoice(next)) {
                status.textContent = copy.saveError;
                return;
            }

            render();
            if (!settings) {
                const pageHeading = document.querySelector("h1");
                if (pageHeading) {
                    if (!pageHeading.hasAttribute("tabindex")) pageHeading.tabIndex = -1;
                    pageHeading.focus({ preventScroll: true });
                }
            }
        }

        if (!settings) {
            const settingsLink = policy.cloneNode(true);
            settingsLink.className = "analytics-settings-link";
            const footer = document.querySelector("footer");
            (footer || document.body).append(settingsLink);
        }
        allow.addEventListener("click", () => select("granted"));
        decline.addEventListener("click", () => select("denied"));
        refreshControls = render;
        render();
    }

    mountControls().catch((error) => console.error("Analytics settings could not be displayed.", error));
})();
