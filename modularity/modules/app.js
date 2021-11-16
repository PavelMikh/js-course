import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import { Settings as parameters} from "../core/constants/settings";
import * as utills from '../core/utils/index';
import { mockDonates } from "../core/mocks/mock-donates";

export default class App {
    #donateForm
    #donateList

    constructor() {
        this.state = {
            donates: mockDonates,
            totalAmount: 0,
            currencySymbol: parameters.currency,
        };

        this.state.totalAmount = this.state.donates != [] ? utills.calculateSumOfNumbers(this.state.donates.map(donate => donate.amount)) : this.state.totalAmount;

        this.#donateForm = new DonateForm(this.state.totalAmount, this.state.currencySymbol, this.createNewDonate.bind(this));
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
