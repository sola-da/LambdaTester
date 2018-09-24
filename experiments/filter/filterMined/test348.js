





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return !$('.users-box[data-uid="' + user.uid + '"]').length;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item['cols'];
};
var argument5 = null;
var argument6 = true;
var argument7 = function (pred) {
 callbackArguments.push(arguments) 

    return pred != null;
};
var argument8 = null;
var argument9 = {"122":"z","IT":"","":6.385193222636778e+307,"3.290124960106844e+307":-100};
var argument10 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument11 = 100;
var argument12 = r_3;
var base_0 = ["g{","_",">)","`wM","_","`&","K"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g{","_",">)","`wM","_","`&","K"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g{","_",">)","`wM","_","`&","K"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)