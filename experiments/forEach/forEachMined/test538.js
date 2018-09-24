





var callbackArguments = [];
var argument1 = function (object) {
 callbackArguments.push(arguments) 

    store.delete(object._id);
};
var argument2 = true;
var argument3 = ["|","FB"];
var argument4 = function (et) {
 callbackArguments.push(arguments) 

    var entityType = parseCsdlEntityType(et, schema, metadataStore);
};
var argument5 = [893,"RJ(","`","5?"];
var argument6 = function (docInfo) {
 callbackArguments.push(arguments) 

    if (docInfo._id && utils.isLocalId(docInfo._id)) {
        return checkDone();
    }
    var id = docInfo.metadata.id;
    var req = txn.objectStore(DOC_STORE).get(id);
    req.onsuccess = function process_docRead(event) {
        var metadata = event.target.result;
        if (metadata) {
            fetchedDocs.set(id, metadata);
        }
        checkDone();
    };
};
var argument7 = true;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    prototype[key] = methodObj[key];
};
var argument9 = true;
var base_0 = [714,100,618,0,783,705,82,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,618,0,783,705,82,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,618,0,783,705,82,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,618,0,783,705,82,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)