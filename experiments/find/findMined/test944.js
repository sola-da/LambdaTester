





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument5 = {"<(":"eCfnDLJiE"};
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument7 = {"82":"","92":1.170040614876174e+308,"783":783,"":893,"1.559078220923285e+308":"",">l":-100,"7.599380035382065e+307":"p{&"};
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc1._id;
};
var base_0 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)