import abstractView from "./abstractView";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle;
    };
    async getHtml() {
        return `
        <title>Pet Owner</title>
        <p>
            <a href="/petOwner/createAccount" data-link>Create your account</a>
        </p>
        <p>
            <a href="/business" data-link>Switch to business portal</a>.
        </p>
    `;
        
    };
};