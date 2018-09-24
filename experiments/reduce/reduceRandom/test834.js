





var callbackArguments = [];
var argument1 = {"25":"fB{&","403":2.282895135548693e+307,"714":2.4044352599181386e+307,"1.240983091445187e+308":"","":"fUt","m S":7.743037486916942e+307,"6.473123347753847e+307":6.891395815610235e+307};
var base_0 = ["#w6","7","}=)",618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test834.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)