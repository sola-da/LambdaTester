





var callbackArguments = [];
var argument1 = {"4":")","969":783,"o":242,"6.805671506347077e+307":5.012887173795741e+307,"1.7783794731378768e+308":"","L":"R^","5.435641141050289e+307":"","1.3028138092198758e+308":""};
var argument2 = "SJ2";
var base_0 = [122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
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
require("fs").writeFileSync("./experiments/some/someRandom/test84.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)