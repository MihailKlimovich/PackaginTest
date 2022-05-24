import { LightningElement, api } from 'lwc';

export default class ModalSearchResult extends LightningElement {
    @api resultSearch;

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}