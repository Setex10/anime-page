const btnMenu = document.getElementById('btnMenu'),
    closeMenu = document.getElementById('closeMenu'),
    menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
    menu.style.transition = 'all 0.5s ease-in-out';
})

closeMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
    menu.style.transition = 'all 0.5s ease-in-out';
})
