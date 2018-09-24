





var callbackArguments = [];
var argument1 = [403,242,969,893,618,126,25,655,969,714];
var argument2 = {"":"","9.935232279341726e+307":242,"<":"gY"};
var argument3 = null;
var base_0 = ["o:","s]","K","M",")[","(]","=6<>","@"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/find/findRandom/test508.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)