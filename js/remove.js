const button = document.querySelector('#remover-paciente')

button.addEventListener('click', function(){
    let checados = document.querySelectorAll('.paciente__checkbox:checked')
    console.log(checados)

   checados.forEach((element)=>{
    let tr = element.parentNode.parentNode
    setTimeout(function(){
        tr.classList.add('.soft-remove')
        tr.remove()
    },500)
    

   })
})