class App {
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "logoDiv";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "logo";
        this.logo.innerHTML = "To-Do";
        this.div.appendChild(this.logo);

        this.disclaimer = document.createElement("p");
        this.disclaimer.id = "disclaimer";
        this.disclaimer.innerHTML = "Disclaimer: To-Do's are not saved when you exit this session.";
        this.div.appendChild(this.disclaimer);

        new Form;
    }
}