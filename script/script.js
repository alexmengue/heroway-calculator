/* Capturando os inputs */
let numero1 = document.getElementById('input1')
let numero2 = document.getElementById('input2')
let result = document.getElementById('resultado')

/* Capturando os botões */ 
let soma = document.getElementById('soma')
let sub = document.getElementById('sub')
let mult = document.getElementById('mult')
let div = document.getElementById('div')
let clear = document.getElementById('clear')

/* Adicionados eventos de click para todos os botões */
soma.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value) === true) {     /* Testa para ambos os inputs se o valor digitado é diferente de number */
        result.value = '[ERROR] Somente valores numéricos.'                     /* Se sim, avisa o usuário para digitar valores númericos */
    } else {
        result.value = Number(numero1.value) + Number(numero2.value)            /* Se não, mostra o resultado da expressão */
    }
})

sub.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value) === true) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        result.value = Number(numero1.value) - Number(numero2.value)
    }
})

mult.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value) === true) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else {
        result.value = Number(numero1.value) * Number(numero2.value)
    }
})

div.addEventListener('click', () => {

    if ((isNaN(numero1.value)) === true || isNaN(numero2.value) === true) {
        result.value = '[ERROR] Somente valores numéricos.'
    } else if (numero2.value == 0) {                                         /* No caso da divisão, após validar se os dados são do tipo number, testar se o segundo valor é igual a 0 */
            result.value = 'Não é possível dividir por 0.'                   /* Se sim, avisa o usuário que não é possível dividir por 0 */
        } else {
            result.value = Number(numero1.value) / Number(numero2.value)     /* Se não, mostra o resultado normalmente */
        }
    
})

clear.addEventListener('click', () => {

    /* Botão clear faz com que os inputs recebam uma string vazia */
    numero1.value = ''
    numero2.value = ''
    result.value = ''
})