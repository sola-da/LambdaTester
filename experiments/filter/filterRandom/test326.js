





var callbackArguments = [];
var argument1 = {"100":3.2862114302425753e+307,"403":4.136959834180025e+306,"595":1.14458226091403e+308,"":"","5e-324":843};
var argument2 = 1.7305169351744785e+308;
var argument3 = "saIK";
var base_0 = ["e","k>(","Ry"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test326.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)