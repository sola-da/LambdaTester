





var callbackArguments = [];
var argument1 = [59,607,-1,618,823,25,823,823,843];
var argument2 = {"82":705,"j":"","g":1.0541616310260551e+308,"DW":1.3052310685351466e+307,"":49,"1.6019169037820345e+308":"Ar"};
var base_0 = [59,25,705]
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
require("fs").writeFileSync("./experiments/every/everyRandom/test956.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)