





var callbackArguments = [];
var argument1 = true;
var argument2 = {"82":1.7055241312972207e+308,"1.7976931348623157e+308":"","2.7071903524160595e+307":1.714508587422269e+308,"ha":82,"1.606468573303944e+308":"AP","1.2341701347659202e+308":"=#L","":1.1644251580175262e+307,"U_":1.5332880299252223e+308,"I":1.0030007322455762e+307};
var argument3 = [843,783,82,893,5e-324,122,157];
var base_0 = ["<","|"]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test412.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)