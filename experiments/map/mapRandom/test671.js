





var callbackArguments = [];
var argument1 = {"714":893,"1.529623292814841e+308":6.016848451460084e+307,"$":"","":"N"};
var argument2 = false;
var argument3 = [618,-1,"Vs<9[k","=",82];
var base_0 = [0,655,242,783,460,705,595,714,655,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test671.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)