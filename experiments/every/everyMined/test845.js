





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument4 = "";
var argument5 = false;
var argument6 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var base_0 = ["#B%T>","]ID ","%","#Qin","2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#B%T>","]ID ","%","#Qin","2"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#B%T>","]ID ","%","#Qin","2"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#B%T>","]ID ","%","#Qin","2"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test845.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)