





var callbackArguments = [];
var argument1 = {"59":"","595":"b","705":"C","969":"Y","":"*c","2.090845542224811e+307":7.866212925311458e+307,"Z":4.4933286215940074e+307};
var argument2 = 1.8279726048585716e+307;
var argument3 = true;
var base_0 = [607,"*","#","|"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/some/someRandom/test905.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)