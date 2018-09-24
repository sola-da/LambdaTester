





var callbackArguments = [];
var argument1 = 823;
var argument2 = {"595":"","618":"M2w","843":213,"P":"","3.450190584515765e+307":8.979697330131496e+307,"2.947453644412264e+306":"","B":"","i":25,"":1.3195120910380904e+308,"x!":1.248905932273327e+308};
var base_0 = ["[","{",":","UB"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
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
require("fs").writeFileSync("./experiments/find/findRandom/test499.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)