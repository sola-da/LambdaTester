





var callbackArguments = [];
var argument1 = {"627":"","-100":"^r","YSM:SZ<@":"_Z","Wg2A":"","1.7976931348623157e+308":"u=p","":618,"1.6088216436963044e+308":""};
var base_0 = [607,126,82,-1,59,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test379.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)