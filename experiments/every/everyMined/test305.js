





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument2 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument3 = null;
var argument4 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var base_0 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)