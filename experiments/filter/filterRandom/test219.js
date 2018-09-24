





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = {"25":7.086368104734425e+307,"655":9.175922697241083e+307,"i":"","":"","8.97768001600169e+307":2.746181093833225e+306,"3.152833696685252e+307":""};
var base_0 = [595,126]
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test219.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)