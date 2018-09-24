





var callbackArguments = [];
var argument1 = true;
var argument2 = {"403":823,"655":893,"893":1.5929381570285098e+308,"":"","6.110050681098983e+307":"x","3.012078760003689e+306":"V","(":"","p=":"e&"};
var argument3 = "";
var base_0 = ["pMO|YTL","6s?","p6)g","w",")",",","O","#","kT","x"]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test931.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)