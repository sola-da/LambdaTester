





var callbackArguments = [];
var argument1 = 157;
var argument2 = {"25":5.287303977462725e+307,"49":7.046221807157096e+307,"U":0,"":"0c^c","jhl":1.831237042928498e+307};
var argument3 = null;
var base_0 = [460,100,823,893,49,893,460,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/find/findRandom/test620.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)