





var callbackArguments = [];
var argument1 = {"":6.080748018983855e+307,"1.673344348970577e+308":1.7289657853343458e+308,"7.877436048858205e+307":1.5581547027328272e+308};
var argument2 = [59,1.7976931348623157e+308,126,-1,122,49,1.7976931348623157e+308,122,0];
var argument3 = "";
var base_0 = ["=","g","]","=Y>P","TE|","^:<3M","N","sOwMuo","Y","j"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test561.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)