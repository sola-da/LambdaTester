





var callbackArguments = [];
var argument1 = 2.580406113233953e+307;
var base_0 = [25,-1,"8","iG)@5_P","@","nKk:=","&"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test505.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)