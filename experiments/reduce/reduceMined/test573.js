





var callbackArguments = [];
var argument1 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument2 = {"82":-100,"100":"","242":"","655":7.040431825087699e+307,"1.0464322875753329e+307":"","":"J2tY","_":"s","1.7827145331524614e+307":""};
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument4 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument5 = "";
var argument6 = function (previousValue, currentValue, index, array) {
 callbackArguments.push(arguments) 

    return array.join();
};
var base_0 = [49,0,823,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,823,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,823,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,0,823,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)