const btnMenu = document.getElementById('btnMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
    menu.style.transition = 'all 0.5s ease-in-out';
})

closeMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 0.5s ease-in-out';
})
