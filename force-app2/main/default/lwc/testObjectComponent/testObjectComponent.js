import { LightningElement } from 'lwc';
import createTestCustomObject from '@salesforce/apex/TestCustomObjectController.createTestCustomObject';

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
            console.log(this.resultInsert);
        }).catch((error) => {
            this.resultInsert = error;
            console.log(this.resultInsert);
        });
    }
}