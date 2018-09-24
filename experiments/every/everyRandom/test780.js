





var callbackArguments = [];
var argument1 = {"403":460,"TwO":"","5.410593768203852e+307":1.8410136598415736e+307,"1.6623477599939908e+308":"","":460,"8.411772156172929e+307":4.2229804891442793e+306};
var argument2 = false;
var base_0 = [-100,1.7976931348623157e+308,0,49,"`?S(","F"]
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
require("fs").writeFileSync("./experiments/every/everyRandom/test780.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)