





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = {"49":"{0`[i","126":25,"1.4537905018560516e+308":"(","6.274704700864123e+306":"f","GiN":1.6048908450819008e+307,"":3.991704606733142e+306,"1.6798476101238045e+308":"","-100":"","1.4476985736766868e+308":595};
var argument4 = true;
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = true;
var base_0 = ["76",1.7976931348623157e+308,823,"]",82,655,460,403,"G",-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["76",1.7976931348623157e+308,823,"]",82,655,460,403,"G",-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["76",1.7976931348623157e+308,823,"]",82,655,460,403,"G",-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["76",1.7976931348623157e+308,823,"]",82,655,460,403,"G",-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test7.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)