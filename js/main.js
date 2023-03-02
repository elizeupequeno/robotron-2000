

const controle = document.querySelectorAll(".controle-ajuste")
console.log(controle);

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        
    });
});

function manipulaDados(operacao, controle) {

    const braco = controle.querySelector(".controle-contador")

    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    }

    else {
        braco.value = parseInt(braco.value) + 1;
    }
}

