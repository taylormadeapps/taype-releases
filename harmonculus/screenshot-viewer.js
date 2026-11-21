(() => {
    const viewer = document.getElementById('screenshot-viewer');
    if (typeof viewer?.showModal !== 'function') return;

    const image = viewer.querySelector('img');
    let opener;

    for (const link of document.querySelectorAll('a[data-screenshot]')) {
        link.addEventListener('click', event => {
            if (event.defaultPrevented || event.button !== 0 ||
                event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            event.preventDefault();
            image.src = link.href;
            image.alt = link.querySelector('img').alt;
            opener = link;
            viewer.showModal();
            document.documentElement.classList.add('screenshot-viewer-open');
        });
    }

    viewer.addEventListener('click', event => {
        if (event.target === viewer || event.target === image) viewer.close();
    });

    viewer.addEventListener('close', () => {
        document.documentElement.classList.remove('screenshot-viewer-open');
        opener?.focus({ preventScroll: true });
    });
})();
