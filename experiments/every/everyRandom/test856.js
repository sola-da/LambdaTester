





var callbackArguments = [];
var argument1 = 3.288811383168886e+307;
var argument2 = {"9":"","82":"","":1.558371262070275e+308,"2.767259524789258e+307":"[","4S":"Q","9.04766059754702e+307":"","-100":""};
var argument3 = [705,"-",25,"Q","Q?!"];
var base_0 = [100,843,1.7976931348623157e+308,5e-324,-100,126,-100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test856.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)