class ToDo{

    static all = [];

    constructor(value){
        this.id = document.getElementsByTagName("li").length;
        this.li = document.createElement("li");
        this.li.id = 'ToDoLi';
        this.li.innerHTML = `${value}`;
        this.ulDiv = document.getElementById("ulDiv");
        this.ulDiv.appendChild(this.li);

        this.deleteButton = document.createElement("button");
        this.deleteButton.id = "deleteButton";
        this.deleteButton.innerHTML = "Delete";
        this.li.appendChild(this.deleteButton);
        this.handleOnSubmit();
        ToDo.all.push(this);
    }

    handleOnSubmit = () => {
        this.deleteButton.addEventListener("click", event => {
            event.preventDefault();
            this.li.remove();
            ToDo.all.pop();
        })
    }
}