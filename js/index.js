let form = document.querySelector('form')
let container = document.querySelector('.container')
let todos = []

form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}

function reload(arr) {
    container.innerHTML = ""

    for (let item of arr) {
        let box = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let button = document.createElement('button')
        let button2 = document.createElement('button')


        button2.classList.add('button2')
        button2.innerHTML = "edit"
        box.classList.add('box')
        p.classList.add('text')
        span.classList.add('op')
        button.classList.add('btn')
        button.innerHTML = "x"
        span.innerHTML = item.time
        p.innerHTML = item.task

        container.append(box)
        box.append(p, span, button, button2)

        button.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)
            box.classList.add('delete-anim')
            setTimeout(() => {
                box.remove()
            }, 500);
        }

        p.addEventListener("click", function () {
            p.classList.toggle("active");
        });








    }
}


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}
