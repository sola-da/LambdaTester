





var callbackArguments = [];
var argument1 = 0;
var argument2 = null;
var base_0 = ["7","IjdqRe","h","M","fVd","-{","#4","`","F","4"]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test122.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)