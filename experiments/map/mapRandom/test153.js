





var callbackArguments = [];
var argument1 = {"8":"","157":"","zw7":618,"":627,"3.1604300089476386e+305":"","Z":"&A0","6.944627473330144e+307":""};
var argument2 = null;
var argument3 = "t)";
var base_0 = [607,242,893,783,655,213,"0",-1,"B*Y"]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test153.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)