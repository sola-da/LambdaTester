





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return me.getListItemValue(x) === value;
};
var argument5 = "J";
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument7 = null;
var argument8 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument9 = false;
var argument10 = false;
var base_0 = ["w","U","9"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","U","9"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","U","9"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","U","9"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)