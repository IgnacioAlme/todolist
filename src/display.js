import makeNewTodo from "./notes";

function displayItems() {
    const items = document.createElement('div');
    items.classList.add('items');

    items.appendChild(
        createItems()
    );
}

function createItems() {
    const submit = document.querySelector('.add');
    submit.addEventListener('click', makeNewTodo);
}

export default displayItems;