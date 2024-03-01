const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    // Redirect to the explanation page for the dish
    const dishId = menuItem.id.replace('menu-', '');
    window.location.href = `dish-${dishId}.html`;
  });
});