class Form {
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "formDiv";
        document.body.appendChild(this.div);
        
        this.textInput = document.createElement("form");
        this.textInput.id = "To-Do-Form";
        this.textInput.innerHTML = `<input id='ToDo' type='text' name='ToDo'/><input type='submit' name='Submit'/>`;
        this.div.appendChild(this.textInput);

        this.ulDiv = document.createElement("div");
        this.ulDiv.id = "ulDiv";
        document.body.appendChild(this.ulDiv)

        this.ul = document.createElement("ul");
        this.ul.id = "ul";
        this.ulDiv.appendChild(this.ul);

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