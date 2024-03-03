import abstractView from "./abstractView";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle;
    };
    async getHtml() {
        return `
        <h1>Business</h1>
        <p>
        <a href="/business/createAccount" data-link>Create your account</a>
        </p>
        <p>
            <a href="/petOwner" data-link>Switch to pet owner portal</a>.
        </p>
    `;
        
    };
};