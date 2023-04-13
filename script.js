function adicionarTarefa() {
    

    const ul = document.getElementById('lista')
    const li = document.createElement('li')
    li.className = 'li'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'check'

    const p = document.createElement('p')
    p.className = 'tarefas'


    const texto = document.getElementById('adicionar')

    if (texto.value.length <= 0) {
        alert('Adicione um texto a sua tarefa!')
    }

    else {
        p.innerHTML = texto.value
        li.appendChild(checkbox)
        li.appendChild(p)
        ul.appendChild(li)
        document.getElementById('span').style.display = 'none'
    }
    
}

function removerTarefa() {
    const checkbox = document.getElementsByClassName('check')

    console.log(checkbox)

     const quantidade = checkbox.length
     console.log(quantidade)
     console.log(checkbox)

     for (let i = checkbox.length - 1; i >= 0; i--) {
        
         if (checkbox[i].checked == true) {
            checkbox[i].parentElement.remove()
         }

     }


    // const elements = document.querySelectorAll('input.check')
    // elements.forEach(element => element.checked ? element.parentElement.remove() : null)
    
}

function removerTudo() {
    const elements = document.querySelectorAll('input.check')
    elements.forEach(element => element.parentElement.remove())
}

