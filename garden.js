function toggleCategory(categoryId) {
    var categoryDiv = document.querySelector('.categories');
    if(categoryDiv){
        categoryDiv.style.display = 'none';
    }

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

function showData(pId) {
    var plantsDiv = document.querySelector('.plants');
    plantsDiv.style.display = 'none';

    var divData = document.getElementById('divData');
    divData.style.display = 'block';
    var plantName = document.getElementById(pId).textContent;
    document.getElementById('selectedPlant').innerHTML = '<p>' + plantName + '</p>';
    document.getElementById('ext-int').innerHTML = '<p>' + pId + '</p>';

    if(pId.includes('ext')){
        document.getElementById('ext').style.display = 'none';
    } else {
        document.getElementById('int').style.display = 'none';
    }
}

function goBack1() {
    var ext_int = document.getElementById('ext-int').innerHTML;
    document.getElementById('divData').style.display = 'none';
    if(ext_int.includes('ext')){
        document.getElementById('ext').style.display = 'block';
    } else {
        document.getElementById('int').style.display = 'block';
    }
}