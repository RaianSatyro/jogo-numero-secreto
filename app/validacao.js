
function verificaValorDoChute(chute){
    const numero = +chute

    if (numero === numeroSecreto){
        document.body.innerHTML =`
            <h2> VOCÊ ACERTOU!!!</h2>
            <h3> O número secreto é ${numeroSecreto}</h3>
            
            <button id='jogar-novamente' class='btn-jogar'> Jogar Novamente </button>
            `  

        }else if (numero > numeroSecreto){
            elementoChute.innerHTML +=`<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`

        }else{
            elementoChute.innerHTML +=`<div>O numero secreto é meior <i class="fa-solid fa-arrow-up-long"></i></div>`
        }

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += '<div> Valor Invalido </div>'
        return
    }
    
    if(numeroInRange(numero)){
        elementoChute.innerHTML += `<div> Valor Invalido!!! O numero precisa está entre ${menorValor} e ${maiorValor} </div>`
        return
    }
    
}

function numeroInvalido(numero){
    return  Number.isNaN(numero)
}


function numeroInRange(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
    
})