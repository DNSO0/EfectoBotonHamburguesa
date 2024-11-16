// Este código se asegura de que el menú funcione correctamente
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const menu = document.querySelector('.menu');

    // Alternar la visibilidad del menú al hacer clic en el botón de hamburguesa
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            menu.style.display = 'block'; // Muestra el menú
        } else {
            menu.style.display = 'none'; // Oculta el menú
        }
    });

    // Cierra el menú al hacer clic en una opción del menú
    menu.addEventListener('click', function() {
        checkbox.checked = false; // Cierra el menú
        menu.style.display = 'none'; // Oculta el menú
    });
});