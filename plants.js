function toggleCategory(categoryId) {
    var categoryDiv = document.querySelector('.categories');
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(category) {
        category.style.display = 'none';
        categoryDiv.style.display = 'none';
    });

    var category = document.getElementById(categoryId);
    if (category) {
        category.style.display = 'block';
    }
}

function goBack(categoryId) {
    var categoryDiv = document.querySelector('.categories');
    var category = document.getElementById(categoryId);
    categoryDiv.style.display = 'block';
    category.style.display = 'none';
    
}
