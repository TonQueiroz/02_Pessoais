

//Função
function ValidarDadosVazios(dadoValidado){
    if (dadoValidado === '') {        
        window.alert('Insira um dado Válido.')
        throw new Error("Sem Dados");
        
    }}

let tarefaEscrita = document.querySelector('input#cxEntrada')

//Adicionando conteúdo com Enter
tarefaEscrita.addEventListener('keydown', function(tecla){
if(tecla.key === 'Enter'){   
    AdicionarTarefa()
}
})

//Função
function AdicionarTarefa(){
    

    ValidarDadosVazios(tarefaEscrita.value)
    
    let sectionlistaDeTarefas = document.querySelector('section#tarefas')
    sectionlistaDeTarefas.style.display = 'Flex' //Deixei a lista de tarefas visível
    

    let itemlista = document.createElement('li')//Criação do Item 

    itemlista.innerHTML = '✒️ -  '+ tarefaEscrita.value +' <span class="xcheck"onclick="ConcluirTarefa(this)">✅</span> <span class="xdelete" onclick="DeletarTarefaUnica(this)">❌</span>' //coloquei o que foi escrito no item 
    // O this dentro da chamada da função faz o a hora que eu clicar ele apontar para ele mesmo aí ele vai excluir ele mesmo atravez do parentRemove(remoção do pai) na função

    let listadeTarefas = document.querySelector('ul#tarefasAFazer') //selecionei a lista
    listadeTarefas.appendChild(itemlista) //adicionei o item a ul(lista)

    document.querySelector('input#cxEntrada').value = '' 
}


//Função
function ConcluirTarefa(tagSpanTatefa){ 
    let tarefaConcluída = tagSpanTatefa.parentElement

    let listaConcluida = document.querySelector('ul#tarefasConcluídas')

    listaConcluida.style.display = 'flex'

    listaConcluida.appendChild(tarefaConcluída)

    console.log(tarefaConcluída)

}

//Função
function DeletarTarefas(tagSpanTatefa){
    let listaconclida = document.querySelector('ul#tarefasConcluídas')
    listaconclida.innerHTML=''

    let listaConcluida = document.querySelector('ul#tarefasConcluídas')
    listaConcluida.style.display = 'none'

}

//Função
function DeletarTarefaUnica(tagSpanTatefa){
    tagSpanTatefa.parentElement.remove()
}

