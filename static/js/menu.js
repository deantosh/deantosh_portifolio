// This script toggles the visibility of a menu when a menu icon is clicked.
document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.id === 'menu-icon') {
        const menu = document.getElementById('dropdown-menu');
        menu.classList.toggle('hidden');
    }
});
