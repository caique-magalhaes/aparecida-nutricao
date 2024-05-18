const botaoBuscar = document.querySelector('#buscar-paciente') 



botaoBuscar.addEventListener('click',buscarPaciente)

function buscarPaciente(){
   const xhr = new XMLHttpRequest()
        xhr.open("GET","Testado com local host")
        
        xhr.addEventListener('load',function(){
        
        if(xhr.status == 200 )
        {  
            const resposta = this.responseText;
            const paciente = JSON.parse(resposta)
            paciente['pacientes'].forEach((element) => {

                element['imc'] = imc(element.peso,element.altura)
                adicionarPacienteTabela(element);
            });
        }else
        {
            console.log(xhr.status)
        }


    })
    xhr.send()
}



