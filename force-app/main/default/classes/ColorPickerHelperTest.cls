@isTest
public with sharing class ColorPickerHelperTest {
    
    @IsTest
    private static void main(){
        
        Contact c = new Contact();
            c.FirstName = 'tester';
            c.LastName = 'tested';
        insert c;

        ColorPickerHelper.getRecord(c.Id, 'LastName');
    }
}
