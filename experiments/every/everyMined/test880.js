





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument2 = false;
var argument3 = false;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = false;
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument8 = ["*","j",0,595,">+","d)"];
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return Math.floor(epsilon + v.dotProduct(n, v.substract(item, a))) <= 0;
};
var argument10 = r_3;
var argument11 = {"213":"","Y":893,"v":"m","4`":126};
var base_0 = [1.7976931348623157e+308,843,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,843,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,843,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,843,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyMined/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)