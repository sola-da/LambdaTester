/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (parentReferenceValue) {
 callbackArguments.push(arguments) 

    var bfField = backReferenceField();
    if (!_.isUndefined(entity[bfField]) && !_.isEqual(entity[bfField], parentReferenceValue)) {
        entity[bfField] = parentReferenceValue;
    }
    return storageDriver.updateEntity(entityDescriptionService.tableDescription(crudId), entity);
};
var argument2 = p2;
var argument3 = p2;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument8 = null;
var argument9 = function (error) {
 callbackArguments.push(arguments) 

    console.error('Error while creating objects');
    new Trace(error).log();
    retPr.reject(error);
};
var argument10 = "}W1";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)