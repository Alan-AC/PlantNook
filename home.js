function showModal(type) {
    if(type = 'plant'){
        document.getElementById('planta_destacada_modal').style.display = 'block';
        document.getElementById('plaga_destacada_modal').style.display = 'none';
        disableClickEvent('PE_Destacada');
    } else {
        document.getElementById('plaga_destacada_modal').style.display = 'block';
        document.getElementById('planta_destacada_modal').style.display = 'none';
        disableClickEvent('P_Destacada');
    }
}

function goBack() {
    document.getElementById('plaga_destacada_modal').style.display = 'none';
    document.getElementById('planta_destacada_modal').style.display = 'none';
    enableClickEvent('PE_Destacada');
    enableClickEvent('P_Destacada');
}

function disableClickEvent(elementId) {
    var element = document.getElementById(elementId);
    element.style.pointerEvents = 'none'; 
}

function enableClickEvent(elementId) {
    var element = document.getElementById(elementId);
    element.style.pointerEvents = 'auto'; 
}