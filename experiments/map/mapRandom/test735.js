





var callbackArguments = [];
var argument1 = null;
var argument2 = {"0":893,"59":"","":"","N,":"``","6.266793904669831e+307":1.5910274311350996e+307,"9.444384147866828e+307":"=Y","1.1265387094923743e+308":"","8.962666612451262e+307":4.0591713751426497e+307,"4.1206974229972455e+307":"","1.0601777204465004e+308":"n[b"};
var argument3 = {"595":"","R":"R","H@^":783,"":969,"1.7976931348623157e+308":7.262291750716596e+307,"1.3546154335868013e+305":"x]i9"};
var base_0 = [714,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/map/mapRandom/test735.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)