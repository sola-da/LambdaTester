





var callbackArguments = [];
var argument1 = {"618":4.757844257568974e+307,"-1":-100,"":"","H":1.1826570571183187e+308,"e[hm":""};
var argument2 = 213;
var argument3 = ["|","u#rh","+","a","r","6O","n"];
var base_0 = [460,969,"+","V]E",460,"k","3Z","C","h","ia"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/some/someRandom/test231.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)