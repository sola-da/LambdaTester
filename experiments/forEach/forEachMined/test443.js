





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t, '');
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    if (!oldKeysMap[key]) {
        var kvDoc = { _id: key };
        var keyValue = indexableKeysToKeyValues[key];
        if ('value' in keyValue) {
            kvDoc.value = keyValue.value;
        }
        kvDocs.push(kvDoc);
    }
};
var argument3 = true;
var argument4 = null;
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    internalValues[key] = defaults[key];
};
var argument6 = "";
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    item.validate(entityType);
};
var argument8 = "";
var base_0 = [705,49,-1,403,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,49,-1,403,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,49,-1,403,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,49,-1,403,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)