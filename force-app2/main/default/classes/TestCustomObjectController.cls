global with sharing class TestCustomObjectController {
    @AuraEnabled
    global static String createTestCustomObject(String nameObject){
        TestCustomObject__c testObject = new TestCustomObject__c(Name = nameObject);
        insert testObject;
        return 'Success';
    }
    @AuraEnabled(cacheable = true)
    global static List<TestCustomObject__c> searchTestCustomObject(String searchName) {
        String nameObject = '%' + searchName + '%';
        List<TestCustomObject__c> foundObjects = [
            SELECT Name, CreatedDate
            FROM TestCustomObject__c 
            WHERE Name LIKE :nameObject
            ORDER BY Name
            LIMIT 10000];
        return foundObjects;
    }
}
