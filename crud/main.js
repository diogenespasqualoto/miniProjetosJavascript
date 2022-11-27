`use strict`;

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Diógenes",
    email: "diogenespasqualoto@gmail.com",
    celular: "123344455555",
    cidade: "são roque"
}

// CRUD - create read update delete

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client')) ?? []
    db_client.push(client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}


// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
