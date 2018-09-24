





var callbackArguments = [];
var argument1 = {"3.373742522996089e+307":49,"Ty":5e-324,"5.534211203821633e+307":"",",o":"","Z":157};
var argument2 = 49;
var argument3 = [213,"gQ",893,"D",705,"5","0B&1*q",893];
var base_0 = [100,843,157,122,-100,607,100,655]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test514.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)