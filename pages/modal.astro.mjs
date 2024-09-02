export { renderers } from '../renderers.mjs';

// compartir en redes sociales
const openModal = document.querySelector('.boton_compartir');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
