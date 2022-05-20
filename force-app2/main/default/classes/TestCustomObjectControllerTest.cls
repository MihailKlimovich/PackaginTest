@isTest
public with sharing class TestCustomObjectControllerTest {
    @IsTest
    static void createTestCustomObjectTest(){
        Test.startTest();
        String requestTest = TestCustomObjectController.createTestCustomObject('Test');
        Test.stopTest();
        System.assertEquals('Success', requestTest);
    }
}
