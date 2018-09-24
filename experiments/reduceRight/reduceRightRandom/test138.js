





var callbackArguments = [];
var argument1 = {"2":"r","59":-100,"705":8.720934163713851e+307,"6.41794874910429e+307":1.2420555123428402e+308,"1.1964910736045723e+308":893,"P":627,"":242,"5.722214409232901e+307":783};
var base_0 = ["P"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test138.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)