





var callbackArguments = [];
var argument1 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument2 = ["(","(Y!?J","0"];
var argument3 = null;
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument5 = function (tab) {
 callbackArguments.push(arguments) 

    if (tab.get('selected')) {
        selection = tab;
        return true;
    }
};
var argument6 = null;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var base_0 = ["mJ","_","+*d`"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mJ","_","+*d`"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mJ","_","+*d`"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mJ","_","+*d`"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)