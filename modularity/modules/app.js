import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import { mockDonates } from "../core/constants/mocks";

export default class App {
    #donateForm
    #donateList

    constructor() {
        this.state = {
            donates: [],
            totalAmount: 0,
        }

        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(this.state.donates);
        
    }

    run() {
        const donateFormHTML = this.#donateForm.render();
        const donateListHTML = this.#donateList.render();

        document.body.append(donateFormHTML, donateListHTML);
        this.#donateList.updateDonates(this.state.donates);
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate);
        this.state.totalAmount += newDonate.amount;
        this.#donateList.updateDonates(this.state.donates);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
    }
}
