





var callbackArguments = [];
var argument1 = false;
var argument2 = {"126":"","242":"=5KF=)'lK","=":"","9.697199010484112e+307":1.2741711974579375e+308,"-1":1.7488080830457287e+308};
var argument3 = false;
var base_0 = [460,157,59,49,242,100,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test128.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)