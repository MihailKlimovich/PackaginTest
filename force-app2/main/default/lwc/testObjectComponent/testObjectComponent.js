import { LightningElement } from 'lwc';
import createTestCustomObject from '@salesforce/apex/TestCustomObjectController.createTestCustomObject';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TestObjectComponent extends LightningElement {
    nameObject;
    resultInsert;

    handleChange(event) {
        this.nameObject = event.target.value;
    }
    handleClick() {
        createTestCustomObject({
            nameObject : this.nameObject
        }).then((result) => {
            this.resultInsert = result;
            this.showToast();
        }).catch((error) => {
            this.resultInsert = error;
            console.log(this.resultInsert);
        });
    }
    showToast() {
        const event = new ShowToastEvent({
            title: 'Success result',
            message: 'You add new TestCustomObject record',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}