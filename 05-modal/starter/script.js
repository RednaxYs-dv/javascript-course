'use strict';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
};

const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// Hour 2: Keyboard events & Advanced UX

'use strict';

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

console.log('Enhanced modal development ready!');

console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
    console.log(
    'Key pressed:', 
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
    );

    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
        ///console.log('ESC key pressed');
    }
    //console.log('Key pressed:', e.key);
});

let lastFocusedButton = null;

const openModal1 = function () {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
modalEl.focus();

lastFocusedButton = document.activeElement;
};

const closeModal1 = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');



