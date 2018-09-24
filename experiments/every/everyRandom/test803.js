





var callbackArguments = [];
var argument1 = true;
var argument2 = {"23":6.424289074933109e+307,"4.074834647282313e+307":1.3460656299106213e+308,"1.212982226944921e+308":"]"};
var argument3 = [-1,59,242,893,122,25,213,460];
var base_0 = [655,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test803.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)