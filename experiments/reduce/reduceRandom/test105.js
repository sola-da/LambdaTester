





var callbackArguments = [];
var argument1 = 8.289131416817211e+307;
var argument2 = {"7.524129568781188e+307":4.4476675621979264e+307,"8.966607470475976e+307":4.4083563581825754e+307,"":"{@","U7":595};
var argument3 = [49,49];
var base_0 = ["V",403,"?r","N",82,"2^1L","^="]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test105.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)