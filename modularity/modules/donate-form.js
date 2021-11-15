export class DonateForm {
    #container
    #totalAmount

    constructor(totalAmount, createDonate) {
        this.createDonate = createDonate;
        this.totalAmount = totalAmount;
        this.#container = document.createElement('form');
        this.#container.classList.add('donate-form');
        this.init();
    }

    init() {
        this.#container.addEventListener('submit', (event) => this.submitHandler(event));
    }

    submitHandler(e) {
        e.preventDefault();
        const {target} = e;
        const input = target.querySelector('.donate-form__donate-input');
        const amount = input.value;

        if (amount) {
            const date = Date.now();
        
            this.createDonate({date, amount});
            input.value = '';
        } else {
            // TODO: show validation tip.
            console.log('validation tip');
        }

        
    }

    render() {
        const totalAmount = document.createElement('h1');
        totalAmount.id = 'total-amount';

        const label = document.createElement('label');
        label.classList.add('donate-form__input-label');
        label.textContent = 'Введите сумму в $';

        const input = document.createElement('input');
        input.classList.add('donate-form__donate-input');
        input.name = 'amount';
        input.type = 'number';
        input.max = '100';
        input.min = '0';
        input.required = '';

        label.insertAdjacentElement('beforeend', input);

        const button = document.createElement('button');
        button.classList.add('donate-form__submit-button');
        button.type = 'submit';
        button.textContent = 'Задонатить';

        this.#container.append(totalAmount, label, button);

        return this.#container;
    }

    updateTotalAmount(newAmount) {
        const totalAmountHTML = document.querySelector('#total-amount');
        console.log('total', totalAmountHTML.textContent);
        totalAmountHTML.textContent = `${Number(totalAmountHTML.textContent) + newAmount}$`;
    }
}
