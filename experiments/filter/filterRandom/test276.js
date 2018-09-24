





var callbackArguments = [];
var argument1 = true;
var argument2 = {"`ls?":242,"1.0671323457698464e+308":460,"":"","y{":893,"ua":"i","1.5064850472469566e+308":893,"0n":"E","1.3024214951916493e+308":1.5838780135121968e+307,"7.513600885346787e+307":607,"F":655};
var argument3 = [-100];
var base_0 = ["S3","|","Nr","qN:|EHB3]"]
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test276.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)