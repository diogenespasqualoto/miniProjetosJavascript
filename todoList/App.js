'use strict';

let banco = [
    { 'tarefa': 'estudar JS', 'status': '' },
    { 'tarefa': 'Netflix', 'status': 'checked' }
];

const criarNovaLabel = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div class="">${tarefa}</div>
    <input type="button" value="X">
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
    banco.forEach(item => criarNovaLabel(item.tarefa, item.status));
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

const clickItem = (evento) => {
    const elemento = evento.target;
    console.log(elemento);
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();

