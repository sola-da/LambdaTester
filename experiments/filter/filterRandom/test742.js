





var callbackArguments = [];
var argument1 = {"618":59,"Lu?":9.865770922190709e+307,"#^yy":8.230254092449159e+307,"A":9.661561021346732e+307,"":"","gA":213,"9.864936026023295e+307":49,"1.3608116575447602e+308":"O5"};
var argument2 = null;
var base_0 = [5e-324,"EUO-",705,607,126,655,-1,783]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
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
require("fs").writeFileSync("./experiments/filter/filterRandom/test742.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)