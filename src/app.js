const header = document.getElementById('header');
const about = document.getElementById('about');
const dropdown = document.getElementById('dropdown');

const topClasses = ['text-white'];
const scrollClasses = ['text-black', 'bg-white', 'border-b-2', 'border-dark-primary', 'drop-shadow-xl'];

function applyClasses(classes, condition) {
    for (const cls of classes) {
        header.classList.toggle(cls, condition)
    }
}

function update() {
    applyClasses(topClasses, window.scrollY === 0);
    applyClasses(scrollClasses, window.scrollY > 0);
}

document.addEventListener('scroll', update);

about.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden')
})

about.addEventListener('mouseleave', () => {
    dropdown.classList.add('hidden')
})
