





var callbackArguments = [];
var argument1 = {"969":8.787776891783897e+307,"W":"","6.055931893934415e+307":"","1.47132868508043e+308":403,"":"`}Y"};
var argument2 = null;
var base_0 = ["t",213,"#","l","5aD|s","2","9","R]`","|",823]
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test543.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)