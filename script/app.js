const camposCard = new Map([]);
const camposReferences = document.querySelectorAll('[data-campo]');
camposReferences.forEach(c => camposCard.set(c.dataset.campo, c));

function enviaDados(event, id){
    camposCard.get(id).innerHTML = event.target.value;
}
