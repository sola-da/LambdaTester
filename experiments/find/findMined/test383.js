





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument5 = {"82":"x=e","100":823,"213":213,"460":7.529020008197823e+307,"714":3.56103951867713e+307,"":"6","<g":"^","W":"7"};
var argument6 = null;
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    return c.schema.indexOf(catalog) >= 0;
};
var argument8 = false;
var argument9 = null;
var argument10 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument11 = null;
var base_0 = ["k","O","P%","a"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","O","P%","a"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","O","P%","a"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","O","P%","a"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)