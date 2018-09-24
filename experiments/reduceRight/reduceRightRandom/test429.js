





var callbackArguments = [];
var argument1 = "q";
var argument2 = null;
var argument3 = {"82":9.926564469321196e+307,"100":403,"1.4372699695079126e+308":"","":2.1587517445830649e+307,"<":49,"1.7152186069107576e+308":">","1.6721628005920914e+308":8.17796622281812e+307,"1.1534930819651836e+308":""};
var base_0 = [-100,82,627,49,893,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test429.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)