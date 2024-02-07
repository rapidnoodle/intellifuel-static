const header = document.getElementById('header');

const topClasses = ['text-white'];
const scrollClasses = ['text-black', 'bg-white', 'border-b-2', 'border-dark-primary', 'drop-shadow-xl'];

function applyClasses(classes, condition) {
    for (const cls of classes) {
        header.classList.toggle(cls, condition)
    }
}

document.addEventListener('scroll', () => {
    applyClasses(topClasses, window.scrollY === 0);
    applyClasses(scrollClasses, window.scrollY > 0);
});
