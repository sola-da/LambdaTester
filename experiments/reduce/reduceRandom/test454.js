





var callbackArguments = [];
var argument1 = {"242":3.6840256889479365e+307,"843":5.676170123903491e+307,"1.4050215341677837e+308":8.29930172380608e+307,"":1.3562174589140189e+308,"wC0'":"S2 ","7.745324096796015e+306":"","4.197475631446249e+307":5.760413581065182e+307};
var argument2 = "";
var base_0 = [-100,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test454.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)