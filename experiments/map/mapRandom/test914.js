





var callbackArguments = [];
var argument1 = {"242":1.264121245536049e+308,"607":1.3540320273759756e+308,"969":"v","":"9","1.7875286144346197e+308":100,"1.1286612133093665e+308":1.3403385710515657e+308,"1.5539425816593359e+308":49,"#":2.4784805751328714e+306};
var argument2 = [595];
var base_0 = ["C","V",655,126,"f",893,823,"Q!6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test914.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)