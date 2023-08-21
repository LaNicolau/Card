const camposCard = document.querySelectorAll('[data-campo]')

function enviaDados(id){
    const elemento = document.getElementById(id)

    camposCard.forEach(campoCard => {
        if (campoCard.dataset.campo == id){
            campoCard.innerHTML = elemento.value
        }
    })
}


