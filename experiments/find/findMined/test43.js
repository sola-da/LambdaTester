





var callbackArguments = [];
var argument1 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (b) {
 callbackArguments.push(arguments) 

    return b.blockID === blockID;
};
var argument5 = null;
var argument6 = false;
var argument7 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument9 = false;
var base_0 = [783,"Hv",0,823,"8h}","=","W"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"Hv",0,823,"8h}","=","W"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"Hv",0,823,"8h}","=","W"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"Hv",0,823,"8h}","=","W"]
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
require("fs").writeFileSync("./experiments/find/findMined/test43.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)