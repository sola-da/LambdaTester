





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    addToMissing(id, rev);
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    tmp.push(e);
};
var argument3 = null;
var argument4 = function (field) {
 callbackArguments.push(arguments) 

    if (file.indexOf(field.jsFunctionName) < 0 && fieldIgnores.indexOf(field.jsFunctionName < 0)) {
        fieldsResult.push(field.jsFunctionName);
    }
};
var argument5 = false;
var argument6 = {"618":"zsu=L","1.4611998308230543e+308":7.060943761746867e+307,"%<t":5.166279719770532e+307};
var argument7 = function (collection) {
 callbackArguments.push(arguments) 

    browserDbInstance[collection] = getCollectionApiInstance(collection);
};
var base_0 = ["mdJ","?7","OO{","_","G",">","*^v","?&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mdJ","?7","OO{","_","G",">","*^v","?&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mdJ","?7","OO{","_","G",">","*^v","?&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mdJ","?7","OO{","_","G",">","*^v","?&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)