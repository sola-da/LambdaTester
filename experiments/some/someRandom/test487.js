





var callbackArguments = [];
var argument1 = {"627":893,"":"e","1.1485996393056065e+307":"","1.5826838504206e+308":"a9","1.6484986209115076e+308":1.2689900512686545e+308};
var argument2 = false;
var base_0 = ["?","8jY",1.7976931348623157e+308,"k#$",460,"j",460,"u"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
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
require("fs").writeFileSync("./experiments/some/someRandom/test487.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)