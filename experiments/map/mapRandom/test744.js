





var callbackArguments = [];
var argument1 = "";
var argument2 = 1.997385683219366e+307;
var argument3 = {"4":"O+Q","25":"","":":","1.7869164845049369e+308":595,"1.5094845967139705e+308":126,"R&Ba":4.736860252904556e+307,"1.7178072294807906e+308":"7>#u"};
var base_0 = [893,893,403,-100,242,122,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test744.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)