class ToDo{
    constructor(value){
        this.li = document.createElement("li");
        this.li.id = `ToDoLi`;
        this.li.innerHTML = `${value}`;
        document.body.appendChild(this.li);
    }
}