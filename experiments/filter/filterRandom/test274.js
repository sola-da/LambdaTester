





var callbackArguments = [];
var argument1 = {"1.455783926962047e+307":"D-^"};
var argument2 = "";
var argument3 = {"7":"!","157":"","607":1.3450793236594381e+308,"714":157,"j":"","":"'A","2.970295762663093e+307":"wH","ZX":"","=tUpuDO+1":893,"O":""};
var base_0 = ["T","8r",893,157,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test274.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)