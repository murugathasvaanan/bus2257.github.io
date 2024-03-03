import abstractView from "./abstractView";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle;
    };
    async getHtml() {
        return `
        <h1>Homescreen</h1>
        <p>
            Please select which portal you would like to access.
        </p>
        <img src="/views/dog.png">
        <p>
    `;
        
    };
};