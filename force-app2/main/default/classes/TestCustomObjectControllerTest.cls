@isTest
public with sharing class TestCustomObjectControllerTest {
    @TestSetup
    static void makeData(){
        TestCustomObject__c testObject = new TestCustomObject__c(Name = 'Test');
        insert testObject;
    }
    @IsTest
    static void createTestCustomObjectTest(){
        Test.startTest();
        String requestTest = TestCustomObjectController.createTestCustomObject('Test');
        Test.stopTest();
        System.assertEquals('Success', requestTest);
    }

    @IsTest
    static void searchTestCustomObjectTest(){
        Test.startTest();
        List<TestCustomObject__c> testObjects = TestCustomObjectController.searchTestCustomObject('Test');
        Test.stopTest();
        System.assertEquals(1, testObjects.size());
    }
}
