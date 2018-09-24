





var callbackArguments = [];
var argument1 = {"2":"n","3":843,"607":"","705":655,"823":"G`E","1.6399844026200697e+308":242,"":969,"F":"JG","{BK4":"8W ","Q":1.3040424761965379e+308};
var argument2 = "MMfW";
var base_0 = [823,595,618,59]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test621.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)