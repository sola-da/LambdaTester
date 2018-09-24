





var callbackArguments = [];
var argument1 = {"49":"","595":"97U","607":157,"":714,"$":1.1540162678379819e+308,"R":4.2482030971080024e+307,"d75A":"","h":3.1531802157249654e+307};
var argument2 = [25,705,100,25,595,122,0,157];
var argument3 = null;
var base_0 = [705,714,823,618,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightRandom/test445.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)