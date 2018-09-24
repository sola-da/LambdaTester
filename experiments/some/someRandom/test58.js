





var callbackArguments = [];
var argument1 = {"403":618,"":"","5.663514604625947e+307":1.131746083181326e+307,"Y":1.5916161624622947e+306,"t$":"^}","'":"Gi","7.788703034167418e+307":607,"8.659773426801515e+307":";"};
var base_0 = [49,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
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
require("fs").writeFileSync("./experiments/some/someRandom/test58.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)