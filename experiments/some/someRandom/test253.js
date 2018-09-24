





var callbackArguments = [];
var argument1 = {"157":"5%","714":714,"":1.1355955927777491e+308,"h":"(<","3.46378570437083e+306":627,"DmW'":627,"1.720611043027593e+308":"]","d":242};
var argument2 = false;
var base_0 = ["?(",595,"w",157,-100]
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
require("fs").writeFileSync("./experiments/some/someRandom/test253.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)