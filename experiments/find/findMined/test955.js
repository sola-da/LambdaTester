





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument2 = {"25":"","3.6515837200770604e+307":607,"#":595};
var argument3 = null;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument5 = null;
var argument6 = null;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument8 = "";
var argument9 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var base_0 = ["sKLAo-?","r","M","V","?@","O",":_j","a"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["sKLAo-?","r","M","V","?@","O",":_j","a"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["sKLAo-?","r","M","V","?@","O",":_j","a"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["sKLAo-?","r","M","V","?@","O",":_j","a"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test955.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)