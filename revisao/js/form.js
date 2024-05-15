'strict mode'
var botaoAdd = document.querySelector('#form__adicionar__botao')

botaoAdd.addEventListener("click",function(event){

    event.preventDefault();
    
    let form = document.querySelector('#form__adicionar')

    let paciente = criarPaciente(form)
    adicionarPacienteTabela(paciente)

    form.reset()

})


const criarPaciente = (form) =>{
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: form.peso.value / (form.altura.value*form.altura.value),
    }
    return paciente
}


function criaTr(paciente){
    const tr = document.createElement('tr');
    tr.classList.add('paciente');
    tr.appendChild(criaTd(paciente.nome,'paciente_info--nome'))
    tr.appendChild(criaTd(paciente.peso,'paciente_info--peso'))
    tr.appendChild(criaTd(paciente.altura,'paciente_info--altura'))
    tr.appendChild(criaTd(paciente.gordura,'paciente_info--gordura'))
    tr.appendChild(criaTd(paciente.imc,'paciente_info--imc'))
    return tr
}

function criaTd(dadoPaciente, classeInfo){
    let td = document.createElement('td')
    td.classList.add(classeInfo)
    td.textContent = dadoPaciente
    console.log(dadoPaciente)
    return td

}
function adicionarPacienteTabela(paciente){
    let trCriado = criaTr(paciente)
    const tabela = document.querySelector('.content__tabela--pacientes')
    tabela.appendChild(trCriado)
}