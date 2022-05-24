import { LightningElement, track } from 'lwc';
import createTestCustomObject from '@salesforce/apex/TestCustomObjectController.createTestCustomObject';
import searchTestCustomObject from '@salesforce/apex/TestCustomObjectController.searchTestCustomObject';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TestObjectComponent extends LightningElement {
    nameObject;
    resultInsert;
    foundObjects;
    isModalOpen;
    @track isLoading = false;

    handleChange(event) {
        this.nameObject = event.target.value;
    }
    handleClick() {
        createTestCustomObject({
            nameObject : this.nameObject
        }).then((result) => {
            this.resultInsert = result;
            this.showToast();
            this.updateRecordView();
        }).catch((error) => {
            this.resultInsert = error;
        }).finally(()=>{
            this.handleIsLoading(false);
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
    handleSearch() {
        searchTestCustomObject({
            searchName : this.nameObject
        }).then((result) => {
            this.foundObjects = result;
            this.isModalOpen = true;
        }).catch((error) => {
            console.log(error);
        });
    }

    closeModal() {
        this.isModalOpen = false;
    }

    updateRecordView() {
        eval("$A.get('e.force:refreshView').fire();");
    }
    
    handleIsLoading(isLoading) {
        this.isLoading = isLoading;
    }
}