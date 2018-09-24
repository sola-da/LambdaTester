





var callbackArguments = [];
var argument1 = true;
var argument2 = [618,5e-324,-1];
var argument3 = {"122":"1","627":"","*":157,"":"","-1":-1,"1.6843102169771425e+308":"","_vQ":"7"};
var base_0 = ["6",595,-1,655,126,"U","x7x"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/every/everyRandom/test93.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)