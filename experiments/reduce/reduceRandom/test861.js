





var callbackArguments = [];
var argument1 = [126,969,59,5e-324,607,242,-1,1.7976931348623157e+308];
var argument2 = {"59":"","122":"+","B":"R"};
var argument3 = ["hqAf","C","m","n","]","(","z","M","R"];
var base_0 = [0,49,0,25,595,969,655,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test861.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)