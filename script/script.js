let numero1 = document.getElementById('input1')
let numero2 = document.getElementById('input2')

let soma = document.getElementById('soma')
let sub = document.getElementById('sub')
let mult = document.getElementById('mult')
let div = document.getElementById('div')
let clear = document.getElementById('clear')

let result = document.getElementById('resultado')

soma.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value)) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        result.value = Number(numero1.value) + Number(numero2.value)
    }
})

sub.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value)) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        result.value = Number(numero1.value) - Number(numero2.value)
    }
})

mult.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value)) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        result.value = Number(numero1.value) * Number(numero2.value)
    }
})

div.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value)) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        if (numero2.value == 0) {
            result.value = 'Não é possível dividir por 0.'
        } else {
            result.value = Number(numero1.value) / Number(numero2.value)
        }
    }
})

clear.addEventListener('click', () => {

    numero1.value = ''
    numero2.value = ''
    result.value = ''
})