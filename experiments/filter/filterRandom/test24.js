





var callbackArguments = [];
var argument1 = {"0":"","49":5.870420644727405e+307,"823":4.881960734797927e+307,"":"T^W","`+q":"AO?","w":"","2.930134581596243e+307":1.2214001550003387e+308,"m;":655};
var base_0 = ["c",460,"n"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test24.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)