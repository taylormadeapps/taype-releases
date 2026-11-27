'use strict';

// One demo plays at a time across the instrument demos and the Kit Mode demos.
const sections = [document.getElementById('from-the-vault'), document.getElementById('kit-mode')];
const players = sections.flatMap((section) => [...section.querySelectorAll('audio')]);

for (const section of sections) {
    section.addEventListener('play', ({ target }) => {
        if (!(target instanceof HTMLAudioElement) || target.paused) return;

        for (const player of players) {
            if (player !== target && !player.paused) player.pause();
        }
    }, { capture: true });
}
