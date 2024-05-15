let listaPaciente = document.querySelectorAll('.paciente')

listaPaciente.forEach((element)=>{

    let tdPeso = element.querySelector('.paciente_info--peso')
    let peso = tdPeso.textContent;

    let tdAltura = element.querySelector('.paciente_info--altura')
    let altura = tdAltura.textContent

    let tdImc = element.querySelector('.paciente_info--imc')
    
    tdImc.textContent = imc(peso,altura).toFixed(2);

})


function imc(peso,altura){
    const imc = peso/(altura*altura)
    return imc
}