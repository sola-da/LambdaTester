





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument2 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument3 = {"7":"GF","403":2.692319671688838e+306,"B":8.046318577065499e+307};
var argument4 = true;
var argument5 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument8 = null;
var argument9 = false;
var base_0 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","zs<VK","z","L","o<","S","m","|"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test588.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)