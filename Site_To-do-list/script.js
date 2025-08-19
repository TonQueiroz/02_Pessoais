function AdicionarTarefa(){   

    let sectionlistaDeTarefas = document.querySelector('section#tarefas')
    sectionlistaDeTarefas.style.display = 'Flex' //Deixei a lista de tarefas visível

    let tarefaEscrita = document.querySelector('input#cxEntrada').value //selecionei o que foi escrito

    let itemlista = document.createElement('li')//Criação do Item 

    itemlista.innerHTML = '✒️ -  '+ tarefaEscrita +'<span onclick="DeletarTarefa(this)">✅</span>' //coloquei o que foi escrito no item 
    // O this dentro da chamada da função faz o a hora que eu clicar ele apontar para ele mesmo aí ele vai excluir ele mesmo atravez do parentRemove(remoção do pai) na função

    let listadeTarefas = document.querySelector('ul') //selecionei a lista
    listadeTarefas.appendChild(itemlista) //adicionei o item a ul(lista)

    document.querySelector('input#cxEntrada').value = ''    
    
}

function DeletarTarefa(tagSpanTatefa){
        tagSpanTatefa.parentElement.remove() //parenteElement Seleciona o pai do span(tagSpanTatefa) que é o Item da lista e o remove exclui ele;
}