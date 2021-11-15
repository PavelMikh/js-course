export class DonateList {
    #donates
    #donatesContainer

    constructor(donates) {
        this.#donates = donates || [];
        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container';
    }

    render() {
        const donatesTitle = document.createElement('h2');
        donatesTitle.className = 'donates-container__title';
        donatesTitle.textContent = 'Список донатов';

        const donates = document.createElement('div');
        donates.className = 'donates-container__donates';

        this.#donates.forEach((donate) => {
            const donateHTML = this.createDonateHTML(donate);
            donates.append(donateHTML);
        });

        this.#donatesContainer.append(donatesTitle, donates);

        return this.#donatesContainer;
    }

    createDonateHTML(donateData) {
        const donateHTML = document.createElement('div');
        donateHTML.className = 'donate-item';
        donateHTML.textContent = donateData.date;

        const amount = document.createElement('b');
        amount.textContent = donateData.amount;

        donateHTML.append(amount);

        return donateHTML;
    }

    updateDonates(updatedDonates) {
        const donates = this.#donatesContainer.querySelector('.donates-container__donates');
        donates.childNodes.forEach((node) => node.remove());

        updatedDonates.forEach((donateData) => {
            const donateHTML = this.createDonateHTML(donateData);

            donates.append(donateHTML);
        })
    }    
}
