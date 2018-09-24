





var callbackArguments = [];
var argument1 = {"0":-100,"607":"","4.847232821326515e+307":1.205221565433266e+307,"":7.15693153518833e+306,"1.7976931348623157e+308":"M24iFa*","3.744638639171363e+307":"","A":"","1.9464474516765145e+306":1.4034373306167546e+308,"=":"{J"};
var base_0 = ["o",460,"k",1.7976931348623157e+308,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
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
require("fs").writeFileSync("./experiments/some/someRandom/test62.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)