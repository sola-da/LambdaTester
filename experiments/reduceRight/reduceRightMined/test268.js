





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument6 = r_0;
var argument7 = 1.680706443648388e+308;
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var base_0 = [403,655,1.7976931348623157e+308,783,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,655,1.7976931348623157e+308,783,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,655,1.7976931348623157e+308,783,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,655,1.7976931348623157e+308,783,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)