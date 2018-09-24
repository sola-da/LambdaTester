





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc._deleted) {
        delete doc._attachments;
    }
};
var argument2 = ["o","2"];
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    v.angle = Math.atan2(v[0] - cx, v[1] - cy);
};
var argument4 = 1.6536795487401014e+308;
var argument5 = null;
var argument6 = function (text, index) {
 callbackArguments.push(arguments) 

    strings.push('#line 1 ', index.toString(), '\n', text);
};
var argument7 = r_1;
var argument8 = function (booth) {
 callbackArguments.push(arguments) 

    booth.sellSheet = _.filter(booth.sellSheet, function (item) {
        return productName == item.item;
    });
    booth.hasVarieties = false;
};
var argument9 = {"49":5.496703464680538e+307,"893":969,"":595,",_O":"","8.183307137681523e+307":460,"1.4685791385013983e+308":""};
var argument10 = false;
var base_0 = [655,"r",")PC","J$","u",705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"r",")PC","J$","u",705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"r",")PC","J$","u",705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"r",")PC","J$","u",705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test89.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)