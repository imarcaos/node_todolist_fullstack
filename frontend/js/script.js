const tbody = document.querySelector('tbody')

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json()
    return tasks
}

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag)
    element.innerText = innerText
    return element
}

const task = {
    id: 1,
    title: 'Obrigado por acompanhar do Desenvolvimento desta App',
    created_at: '18 Maio de 2024 00:12',
    status: 'pendente'
}

const createRow = (task) => {

    const { id, title, created_at, status } = task

    const tr = createElement('tr')
    const tdTitle = createElement('td', title)
    const tdCreatedAt = createElement('td', created_at)

}



//createRow(task)