





var callbackArguments = [];
var argument1 = ["y",627,"?k",122,-100,157,"{sm",213];
var argument2 = 3.3910765896536924e+307;
var argument3 = {"1.7976931348623157e+308":5.954360656597689e+307,"5.230360397800698e+307":893,"2.6666257156277594e+307":9.086138392763165e+307,"H":5.652695993681963e+307,"":""};
var base_0 = [122,627,59,607,627,823,126,607]
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
require("fs").writeFileSync("./experiments/every/everyRandom/test950.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)