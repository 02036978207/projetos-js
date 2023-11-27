let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adcionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach(tarefa => {

        novaLista = novaLista + `
        <li>
        <p>${tarefa}</p>
        </li>
        `
    })
    
    listaCompleta.innerHTML = novaLista

}



function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}





botao.addEventListener("click", cliqueiNoBotao)