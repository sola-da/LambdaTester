





var callbackArguments = [];
var argument1 = {"":157,"1.031095186017137e+308":"","2.822883189696247e+307":""};
var argument2 = -100;
var argument3 = {"1.5828611569830517e+308":122,"1.3310346048862384e+307":242,"":""};
var base_0 = ["H","J","!h1","[",")&"]
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test348.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)