'use strict';

let banco = [
    { 'tarefa': 'estudar JS', 'status': '' },
    { 'tarefa': 'Netflix', 'status': 'checked' },
    { 'tarefa': 'teste1', 'status': '' }

];

const criarNovaLabel = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice} >
    <div class="">${tarefa}</div>
    <input type="button" value="X" data-indice=${indice} >
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach((item, indice) => criarNovaLabel(item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter') {
        banco.push({ 'tarefa': texto, 'status': '' });
        atualizarTela();
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
}
const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    atualizarTela();
}
const clickItem = (evento) => {
    const elemento = evento.target;
    console.log(elemento.type);
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();


