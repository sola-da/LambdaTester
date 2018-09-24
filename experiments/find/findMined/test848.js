





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument2 = false;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument7 = false;
var argument8 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument9 = false;
var base_0 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)