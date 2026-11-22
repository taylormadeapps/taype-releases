'use strict';

const vault = document.getElementById('from-the-vault');
const players = vault.querySelectorAll('audio');

vault.addEventListener('play', ({ target }) => {
    if (!(target instanceof HTMLAudioElement) || target.paused) return;

    for (const player of players) {
        if (player !== target && !player.paused) player.pause();
    }
}, { capture: true });
