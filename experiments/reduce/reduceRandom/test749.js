





var callbackArguments = [];
var argument1 = 1.7109681049466027e+308;
var argument2 = true;
var base_0 = [59,783,783,618,823,607,969,705,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test749.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)