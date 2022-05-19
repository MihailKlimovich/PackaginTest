global with sharing class TestClass2 {
    global TestClass2() {
        System.debug('Hello Wortld');
    }

    global static void TestUnlockedPackageMehtod() {
        TestManagePackageClass.testManagedPackageMethod();
    }
}
