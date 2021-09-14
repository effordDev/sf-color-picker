public with sharing class ColorPickerHelper {
   
    @AuraEnabled
    public static SObject getRecord(Id recordId, String field){

        String SObjName = recordId.getSObjectType().getDescribe().getName();

        String query = 'SELECT Id, ' + field + 
            ' FROM ' + SObjName + 
            ' WHERE Id = ' + '\'' + recordId + '\'' + 
            ' LIMIT 1';
        system.debug(query);

        SObject record = Database.query(query);

        return record;
    }
}
