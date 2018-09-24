





var callbackArguments = [];
var argument1 = {"126":"","618":"","":"","1.3680816704374437e+308":-1,"1.75273847064817e+308":"","1.585340262681923e+308":1.3525734672468675e+308};
var argument2 = {"0":"","242":9.87584936400125e+307,"G&":1.53103827702017e+308,"1.4800555024022805e+308":1.2225729806921863e+307,"1.593152294247785e+308":"","":"w","m":"","rI":"","HRfz":"","1.2917197125825433e+307":"xYP{X8"};
var base_0 = [595,403,82,618]
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
require("fs").writeFileSync("./experiments/reduce/reduceRandom/test285.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)