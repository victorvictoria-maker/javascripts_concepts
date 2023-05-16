//it is recommended to make reqest to the backend asynchonous
//you can use AJAX with this
//go to JSON placeholder on the web, you get access to dummy JSON APIs there.

let list = document.getElementById('todo-list');
let inputBox = document.getElementById('todo-input');
let btnAdd = document.getElementById('add-item');
let btnUpdate = document.getElementById('update-item');

var currentInputValue = '';
inputBox.addEventListener('input', function(e) {
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addListItem();
    }
});

function createNewNode() {
    var textNode = document.createTextNode(currentInputValue);
    var newListItem = document.createElement('li');
   
    newListItem.appendChild(textNode);
    newListItem.id = "item" + (list.childElementCount + 1);

    return newListItem;
};

function addListItem() {
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        let newListItem = createNewNode();

        list.appendChild(newListItem);

        inputBox.value = '';
        currentInputValue = '';
    } else {
        alert('Enter a valid TODO item');
    };
}

btnAdd.addEventListener('click', createNewTodoToBackend);

btnUpdate.addEventListener('click', function() {
    let firstElement = list.firstElementChild;
    let newListItem = createNewNode();

    list.replaceChild(newListItem, firstElement);
});

function createTodoDynamicallyFromBackend (id, title) {
    let textNode = document.createTextNode(title);
    let newListItem = document.createElement('li');
   
    newListItem.appendChild(textNode);
    newListItem.id = id

    return newListItem;
};

function getTodoFromBackend() {
    let http = new XMLHttpRequest();
    // the http.open() gets three arguments - type of request, url, boolean value to now if asynchronous or otherwise 
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();

    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                let response = JSON.parse(this.responseText);

                for (let index = 0; index < response.length; index++) {
                    list.appendChild(createTodoDynamicallyFromBackend(response[index].id, response[index].title));
                }

            } else {
                console.log('Request failed.');
            }
        }
    };
}

getTodoFromBackend();


//send a call to the backend
function createNewTodoToBackend() {
    //alert('hi');
    let http = new XMLHttpRequest();

    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
    let newTodo = {
        "userId": 1,
        "title": currentInputValue,
        "completed": false
    };
    http.send(JSON.stringify(newTodo));

    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                let response = JSON.parse(this.responseText);
                list.appendChild(createTodoDynamicallyFromBackend(response.id, currentInputValue));
                currentInputValue = '';
                // for (let index = 0; index < response.length; index++) {
                //     list.appendChild(createTodoDynamicallyFromBackend(response[index].id, response[index].title));
                // }
                //console.log('Add item');

            } else {
                console.log('Request failed.');
            }
        }
    };
}