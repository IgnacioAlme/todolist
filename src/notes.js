class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static projects = [];

    get projects() {
        return this.projects; 
    }
}

function makeNewTodo() {
    const form = document.querySelector('form');

    let title = form.elements['title'].value;
    let description = form.elements['description'].value;
    let date = form.elements['date'].value;
    let priority = form.elements['priority'].value;

    let newNote = new Todo(title, description, date, priority);
    addNoteToList(newNote);

    console.log('Created new note.');
}

function addNoteToList(note) {
    Todo.projects.push(note);
}

export default makeNewTodo;