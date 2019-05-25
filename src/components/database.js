export function initializeDatabase () {
    //request connection sa datatabase
    var request = window.indexedDB.open("MyDataRichard", 1);

    //kapaga naopen na ung db
    request.onupgradeneeded = function(event) {
        //create table
        var database = event.target.result;

        //tignan kung may bank table na, kapag wala pa, create table at columns
        if (!database.objectStoreNames.contains('bank')) {
            var table = database.createObjectStore("bank", { keyPath: "bankId", autoIncrement: true });
            table.createIndex("bankName", "bankName", { unique: false });
            table.createIndex("bankNumber", "bankNumber", { unique: false });
        }
        
    }
}