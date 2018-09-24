





var callbackArguments = [];
var argument1 = {"25":1.1707740163161644e+308,"460":100,"618":"Ytf","1.4316069378296524e+308":"X","":"","M*":1.5324439755283366e+308,"5.999259864016606e+307":"aa"};
var base_0 = [607,627,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test265.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)