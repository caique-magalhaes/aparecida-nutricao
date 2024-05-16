const botaoBuscar = document.querySelector('#buscar-paciente') 



botaoBuscar.addEventListener('click',buscarPaciente)

function buscarPaciente(){
   const xhr = new XMLHttpRequest()
        xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")
        
        xhr.addEventListener('load',function(){
        
        if(xhr.status == 200 )
        {  
            const resposta = this.responseText;
            const paciente = resposta.JSON.parse(parse)
            paciente.forEach((element) => {
                adicionarPacienteTabela(element);
            });
        }else
        {
            console.log(xhr.status)
        }


    })
    xhr.send()
}



