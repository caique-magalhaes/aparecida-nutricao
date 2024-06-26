const campoFiltro = document.querySelector("#container--buscar")

campoFiltro.addEventListener('input',function(){
    let paciente = document.querySelectorAll('.paciente')
    
    
    if(this.value.length > 0){
       paciente.forEach((element) => {
           const tdNome = element.querySelector('.paciente_info--nome');
           const nome = tdNome.textContent;

           const expressao = new RegExp(this.value,'i')
           

           if(expressao.test(nome)){
                element.classList.remove('pacientes--naoprocurados')
           }else{
                element.classList.add('pacientes--naoprocurados')
           }


       })
    
    }else{
        paciente.forEach((element)=>{
            element.classList.remove('pacientes--naoprocurados')
        })
    }
})

