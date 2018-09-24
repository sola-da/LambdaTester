





var callbackArguments = [];
var argument1 = 893;
var argument2 = null;
var argument3 = {"122":8.791712969345848e+307,"242":242,"655":"g","8.694696105588629e+306":"","1.6260967795915821e+308":1.2343896582404832e+308,"vG":1.2424486663838628e+308,"y":2.1285963186512492e+307,"":"[","6.051330745622199e+307":59};
var base_0 = ["@wI","W","G","C]JD",627,5e-324]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test432.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)