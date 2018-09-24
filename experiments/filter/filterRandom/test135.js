





var callbackArguments = [];
var argument1 = {"59":"MH","893":1.638557794579497e+308,"4.659416349855674e+307":"","1.4291657012563757e+308":"","8.789198128019564e+307":2.0644029668073767e+306,"":7.627855480641706e+307};
var argument2 = 627;
var argument3 = ["^","t5K","V","T",")r",";n4M","p","w","M"];
var base_0 = [403,"{","6",595,59,"(",25,"K",705]
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test135.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)