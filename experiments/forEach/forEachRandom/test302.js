





var callbackArguments = [];
var argument1 = {"714":"","9.063753956365572e+307":"S","9.528164658744007e+306":"L","2.8543786859361413e+307":3.899128581031501e+307,"1.278994185080776e+308":"","":4.3614755335232507e+307};
var argument2 = ["r","F","E","r","TLMRiuz","Z4S",");]^","W,u$-^"];
var base_0 = [618,655,-1,627,655,893,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test302.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)