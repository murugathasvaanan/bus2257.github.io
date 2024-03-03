import abstractView from "./abstractView";
import business from "./business";

export default class extends abstractView {
    constructor(params) {
        super(params);
        // console.log(params);
        this.postId = params.id;
        this.strSplit = this.postId.split(/(?=[A-Z])/);
        // console.log(this.strSplit);
        // for (let i = 0; i < strSplit.length; i++) {
        //     let word = strSplit[i]; 
        // }
        // console.log(params);
        if (window.location.pathname.split("/").filter(a => a.length > 0).length > 2) {
            this.entryfield = `
            <div class = 'group'>
                <input id='txtemail' type='email'>
                <label>Email</label>
            </div>
            <div class = 'group'>
                <input id='txtpw' type='password'>
                <label>Password</label>
            </div>
            <div>
                <input id='submit' type ='submit'>
            `;
        }
        else {
            this.entryfield = '';
        }

        if (window.location.href.indexOf("business") != -1) {
            this.root = "business";
            this.proceed = "Please select if you would like to make a business account for a pet groomer or veterinarian clinic";
            this.button1 = `
            <a href="/business/createAccount/vet" data-link>Veterinarian Clinic</a> \n <a href="/business/createAccount/groomer" data-link>Pet Groomer</a>
            `;
        }
        else {
            this.root = "pet owner";
            this.proceed = "Please press the button below to create your account and set up a profile for your pet"
            this.button1 = "<a href=\"/petOwner/createAccount/petOwner\" data-link>Make account</a>";
        }

        this.setTitle;
    };
    async getHtml() {
        return `
        <h1>Create Account</h1>
        <p>
            You are going to ${this.strSplit[0]} a ${this.root} ${this.strSplit[1].toLowerCase()}.
        </p>
        <p>
            ${this.proceed}.
        </p>
        <p>
            ${this.button1}
        </p>
        <p>
            ${this.entryfield}
        </p>
    `;
        
    };
};