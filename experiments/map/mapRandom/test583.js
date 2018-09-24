





var callbackArguments = [];
var argument1 = {"25":1.0951878576942114e+308,"893":"","8.37149668715122e+307":"","8.126285370890407e+306":3.2122184824237154e+307,"8.457843870507349e+307":""};
var argument2 = ["n,]"];
var base_0 = ["E","=Jn"]
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
require("fs").writeFileSync("./experiments/map/mapRandom/test583.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)