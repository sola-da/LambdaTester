





var callbackArguments = [];
var argument1 = false;
var argument2 = {"403":823,"655":25,"843":"-","8.028553293091058e+307":"w","!,'!|2":"^7","5.687793573896889e+307":"","GJ":969,"":1.3772409629936904e+308,"3}":"t"};
var base_0 = [627,969,618,82,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test901.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)