





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var base_0 = [100,"6M",627,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test587.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)