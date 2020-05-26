class Form {
    constructor(){
        this.textInput = document.createElement("form");
        this.textInput.id = "To-Do-Form";
        this.textInput.innerHTML = `<input type='text' name='ToDo'/><input type='submit' name='Submit'/>`;
        document.body.appendChild(this.textInput);

        this.handleOnSubmit();
    }

    handleOnSubmit = () => {
        this.textInput.addEventListener("submit", event => {
            event.preventDefault();
            
        })
    }
}