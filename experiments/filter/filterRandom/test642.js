





var callbackArguments = [];
var argument1 = false;
var argument2 = {"82":"x=e","100":823,"213":213,"460":7.529020008197823e+307,"714":3.56103951867713e+307,"":"6","<g":"^","W":"7"};
var argument3 = ["x=_GoMt$K","N","|","72Ge"];
var base_0 = ["ey=-","O","P%","a","E&PU"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test642.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)