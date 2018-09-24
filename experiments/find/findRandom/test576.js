





var callbackArguments = [];
var argument1 = [823,-1,460,0,-100,0,1.7976931348623157e+308];
var argument2 = ["G","L","Y0","{","_",">)","`wM","_"];
var base_0 = [705,213,5e-324,122,1.7976931348623157e+308,126,893,213,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
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
require("fs").writeFileSync("./experiments/find/findRandom/test576.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)