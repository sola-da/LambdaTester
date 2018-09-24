





var callbackArguments = [];
var argument1 = [-1,82,-1,1.7976931348623157e+308,100,126,49];
var argument2 = {"82":"9k","126":1.5465642130228545e+308,"607":"T?LS{J","":"V","|":1.0694816101822888e+308,"i":100,"h":1.9887810608221318e+307,"7.918015620340516e+307":3.090116693462502e+307};
var argument3 = null;
var base_0 = [403,82,893,242,59,25,1.7976931348623157e+308,82,100,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test465.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)