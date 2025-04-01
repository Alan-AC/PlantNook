function toggleCategory(categoryId) {
    // Ocultar todas las categorías
    var categories = document.querySelectorAll('.category');
    var categoryDiv = document.querySelectorAll('.categories');
    categories.forEach(function(category) {
        category.style.display = 'none';
        categoryDiv.style.display = 'none';
    });

    // Mostrar la categoría seleccionada
    var category = document.getElementById(categoryId);
    if (category) {
        category.style.display = 'block';
    }
}
