import {DonateForm} from "./donate-form";

export default class App {
    #donateForm

    constructor() {
        this.#donateForm = new DonateForm;
    }

    run() {
        const donateFormHTML = this.#donateForm.render();
        document.body.insertAdjacentElement('beforeend', donateFormHTML);
    }
}