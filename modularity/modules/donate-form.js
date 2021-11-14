export class DonateForm {
    #container

    constructor() {
        this.#container = document.createElement('form');
        this.#container.classList.add('donate-form');
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
}
