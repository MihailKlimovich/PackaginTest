global with sharing class TestCustomObjectController {
    @AuraEnabled
    global static String createTestCustomObject(String nameObject){
            TestCustomObject__c testObject = new TestCustomObject__c(Name = nameObject);
            insert testObject;
            return 'Success';
    }
}
