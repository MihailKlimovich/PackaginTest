public with sharing class TestCustomObjectController {
    @AuraEnabled
    public static string createTestCustomObject(String nameObject){
        try {
            insert new TestCustomObject__c(Name = nameObject);
            return 'Success';
        } catch (Exception e) {
            return 'Fail';
        }
    }
}
