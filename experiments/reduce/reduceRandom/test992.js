





var callbackArguments = [];
var argument1 = "8 3]wj";
var argument2 = [783,25];
var argument3 = {"1":1.709137403042833e+308,"8":823,"49":0,"627":"","2.8558509016191335e+307":"z","":213,"Uw:lSM&":6.508512511736796e+307,"8.295867395608939e+307":157,"6.730483066849164e+307":893};
var base_0 = [1.7976931348623157e+308,969,607,-100,843,157,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test992.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)