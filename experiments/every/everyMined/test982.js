





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = ["Tgu","5y","Sb","q","#"];
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument6 = 5.24588615475419e+307;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
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
require("fs").writeFileSync("./experiments/every/everyMined/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)