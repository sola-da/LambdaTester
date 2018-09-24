





var callbackArguments = [];
var argument1 = [403,122,607,783,242,-1,-1,100];
var argument2 = {"":"","+6":242,"-1":2.1336867689125538e+307,"1.7318656929600261e+308":893,"4.573509911264938e+307":"t","1.0456859352598883e+308":"_yL","8.645820778917135e+307":1.3288713729036678e+308};
var argument3 = "";
var base_0 = [1.7976931348623157e+308,607,655,">","M","Xws=#7vtv3"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test582.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)