const form = document.getElementById('form');
const numa = document.getElementById('numa');
const numb = document.getElementById('numb');
const msg = document.getElementById('msg-acepted')
const msgError = document.getElementById('msg-error')

form.addEventListener('submit', function(e){
    e.preventDefault();
    validaNumber();
})

form.addEventListener('reset', function(e){
    msgError.style.display = 'none'
    msg.style.display = 'none'
})

function validaNumber(){
    const numberA = Number(numa.value)
    const numberB = Number(numb.value)


    if(numberA > numberB){
        msgError.innerHTML = 'Número <b>A</b> não pode ser maior que Número <b>B</b> !'
        msgError.style.display = 'block'
        msgError.style.background = 'red'

        numa.value = '';
        numb.value = '';
    } else{
        msg.innerHTML = 'Correto'
        msg.style.display = 'block'
        msg.style.background = 'green'

        numa.value = '';
        numb.value = '';
    }
}