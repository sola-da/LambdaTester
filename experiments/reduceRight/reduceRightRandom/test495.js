





var callbackArguments = [];
var argument1 = "`Oug";
var argument2 = {"460":"1c","607":"'","627":242,"":1.4660414176404784e+308,"$Hx:}":1.4292775210404945e+308};
var argument3 = [607,1.7976931348623157e+308,783,595,1.7976931348623157e+308,655,403,1.7976931348623157e+308,100];
var base_0 = ["Ho96","Tag",893,"0QhME"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test495.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)