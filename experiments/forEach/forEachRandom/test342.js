





var callbackArguments = [];
var argument1 = {"595":460,"1.515232526865775e+308":1.1568746137956219e+308,"":"D,","1.7976931348623157e+308":"8(","-1":1.448283032768923e+307,"1.671259945975452e+307":1.0209502036371767e+308,"&)":157,"1.119015953434026e+308":"","5.380163642292243e+307":"s","1.3049539094462105e+308":82};
var argument2 = {"213":122,"j1":1.0826633197998088e+308,"8.81512603999848e+307":"JOyc*h","8.021893174449399e+307":"","L":100,"3.268903409988116e+307":"t9"};
var argument3 = 6.794511062012994e+307;
var base_0 = [25,59,"dwJ(",893,893,"w",618,"t",-100,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/forEach/forEachRandom/test342.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)