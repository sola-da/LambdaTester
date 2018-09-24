





var callbackArguments = [];
var argument1 = 1.931899559161299e+306;
var argument2 = {"0":"","460":"!$b,","783":0,"":8.87662732879263e+307,"1.7976931348623157e+308":5e-324,"Gi":6.578421937826073e+307,"9.278358219435834e+307":"","9.075581825180678e+307":1.3944254192530013e+308,"1.2129847316350142e+308":"","0j_3Nvx)":""};
var argument3 = {"403":"[{"};
var base_0 = [213,893]
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
require("fs").writeFileSync("./experiments/find/findRandom/test520.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)