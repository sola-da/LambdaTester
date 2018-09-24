





var callbackArguments = [];
var argument1 = {"122":8.721152389507695e+305,"403":"","705":2.0624391750055156e+307,"893":8.377808525633074e+307,"969":1.7924578969938689e+308,"i":4.511351005472876e+307,"":1.7953540033223009e+308,"7.364352309350597e+307":"@p","1.0196689986154981e+308":"","Y":783};
var argument2 = 3.3801391464793116e+307;
var base_0 = ["6",122,"3L",823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
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
require("fs").writeFileSync("./experiments/every/everyRandom/test808.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)