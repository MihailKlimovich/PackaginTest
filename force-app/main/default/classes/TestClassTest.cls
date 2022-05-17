@isTest
public with sharing class TestClassTest {

    @IsTest
    static void testMethod1(){
        
        Test.startTest();
        TestClass testClass = new TestClass();
        Test.stopTest();
        
    }

    @IsTest
    static void testMethod2(){
        
        Test.startTest();
        TestClass2 testClass = new TestClass2();
        Test.stopTest();
        
    }
}
