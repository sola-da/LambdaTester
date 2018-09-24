





var callbackArguments = [];
var argument1 = function (state) {
 callbackArguments.push(arguments) 

    list.push(state.self);
};
var argument2 = {"1.3556234451406543e+308":"","N":"","":"4"};
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    var method = c.method;
    delete c.method;
    changesObject[method] = c;
};
var argument4 = r_0;
var argument5 = function (relatedEntity) {
 callbackArguments.push(arguments) 

    if (typeof relatedEntity === 'function') {
        mc.deferredFns.push(function () {
            relatedEntity = relatedEntity();
            updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
        });
    } else {
        updateRelatedEntityInCollection(relatedEntity, originalRelatedEntities, targetEntity, inverseProperty);
    }
};
var argument6 = null;
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    o.push(parseLibotr(i));
};
var argument8 = r_1;
var argument9 = null;
var base_0 = ["JO","Vix","KYO6","Z*","]X"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["JO","Vix","KYO6","Z*","]X"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["JO","Vix","KYO6","Z*","]X"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["JO","Vix","KYO6","Z*","]X"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test322.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)