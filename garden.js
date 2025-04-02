function toggleCategory(categoryId) {
    var categoryDiv = document.querySelector('.categories');
    var areasDiv = document.querySelector('.areas');
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.style.display = 'none';
        categoryDiv.style.display = 'none';
    });

    var category = document.getElementById(categoryId);
    if (category) {
        areasDiv.style.display = 'block';
        category.style.display = 'block';
    }
}

function toggleArea(categoryId) {
    var areasDiv = document.querySelector('.areas');
    var plants = document.querySelectorAll('.plants');
    plants.forEach(function(plant) {
        plant.style.display = 'none';
        areasDiv.style.display = 'none';
    });

    var plant = document.getElementById(categoryId);
    if (plant) {
        areasDiv.style.display = 'block';
        plant.style.display = 'block';
    }
}