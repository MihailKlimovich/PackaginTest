public with sharing class TestCustomObjectController {
    @AuraEnabled(cacheable = true)
    public static String createTestCustomObject(String nameObject){
            TestCustomObject__c testObject = new TestCustomObject__c(Name = nameObject);
            insert testObject;
            return 'Success';
    }
}
