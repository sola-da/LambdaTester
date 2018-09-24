





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"126":126,"":59,"]":49,"6.093981207760745e+307":1.128087220375579e+308,"&%F":1.473386110443411e+308,"yj(-@q":25,"4.850826653000977e+307":";*n","3.3706930978900593e+307":"(","3.3948789804746386e+307":" }"}
base_0[1][2] = false
return a-b-c
};
var argument2 = 1.7365059040504153e+307;
var argument3 = {"0":"","":"J","4.904186014994623e+307":1.0792605563541612e+308,"f":"`Sk","1.0289896489889677e+308":"!@Fc[","4.2350188500896063e+307":"","YX":-1,"4.3704348125305416e+307":403};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f9zgt4n!ZJR]W'] = {"5.178862997241154e+307":"@d","6.491759083113556e+307":""}
return a/b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = ["sl","3",";^",":","|K","o","i"]
argument7 = ""
return a-b*c
};
var argument7 = "F";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.249941463060761e+307] = {"0":"JV","607":"k","705":1.7766666192658609e+308,">8r":157,"9.95112245949574e+307":"wYF","4$":""}
base_3[7] = ["vmm","x","j|","9Hn","Agu10","]K3?>H31q6dH","Y([d$","!"]
base_3[6] = "xD(#"
return a/b+c
};
var base_0 = [49,823,460]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,823,460]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,823,460]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,823,460]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/some/someGen/test927.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)