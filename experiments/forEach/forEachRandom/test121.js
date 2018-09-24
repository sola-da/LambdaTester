





var callbackArguments = [];
var argument1 = {":[":969,"9.908289520587372e+307":5e-324,"":1.329788913474809e+308,"Y$RjO;":82,"1e":1.0400658109989964e+308,"7.646082706400073e+307":783,"dWe":1.3959017042697757e+308,"4.9768397522802e+307":-1};
var argument2 = null;
var base_0 = [655,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test121.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)