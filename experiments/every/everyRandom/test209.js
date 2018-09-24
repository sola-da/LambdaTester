





var callbackArguments = [];
var argument1 = {"49":1.6812244180288083e+308,"":"Zzb9[kq?","1.0698000328301044e+308":607,"1.052407396634865e+307":1.7976931348623157e+308};
var base_0 = [403,"]IK",126,893,655,-1,157,0,25,"WeYA%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test209.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)