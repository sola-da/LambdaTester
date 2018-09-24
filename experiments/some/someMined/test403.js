





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument3 = function (value, index, list) {
 callbackArguments.push(arguments) 

    if (predicate(value, index, list)) {
        result = value;
        return true;
    }
};
var argument4 = {"E%":"q*","s8;":"","":"([+","sL=GjC@@X":"","f":"F","1.3559784896714044e+308":""};
var argument5 = function (feature) {
 callbackArguments.push(arguments) 

    return feature.name === cachingLayer;
};
var argument6 = null;
var argument7 = "";
var base_0 = ["<",":","`","X","q8e","k9","8","}6"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<",":","`","X","q8e","k9","8","}6"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<",":","`","X","q8e","k9","8","}6"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<",":","`","X","q8e","k9","8","}6"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test403.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)