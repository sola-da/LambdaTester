





var callbackArguments = [];
var argument1 = [1.7976931348623157e+308,893,-100,100,705];
var argument2 = {"213":"5G^T@z","705":82,"714":843,"969":9.479467245673807e+307,"|$":242,"":"L","'z0:HiL:g}`":"","w":714,"N^9>t<u25":1.0436550389996668e+308};
var argument3 = 607;
var base_0 = [59,5e-324,126,213,893,823,403,627]
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test547.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)