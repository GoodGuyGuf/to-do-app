class Form {
    constructor(){
        this.textInput = document.createElement("form");
        this.textInput.id = "To-Do-Form";
        this.textInput.innerHTML = `<input id='ToDo' type='text' name='ToDo'/><input type='submit' name='Submit'/>`;
        document.body.appendChild(this.textInput);

        this.ul = document.createElement("ul");
        this.ul.id = "ul";
        document.body.appendChild(this.ul);

        this.handleOnSubmit();
    }

    handleOnSubmit = () => {
        this.textInput.addEventListener("submit", event => {
            event.preventDefault();
            
            let value = document.getElementById("ToDo").value;
            new ToDo(value);
        })
    }
}