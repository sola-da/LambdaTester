





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = "7"
base_0[4][8] = false
base_0[4] = [655,460]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['5L'] = 25
argument3[4] = {"100":714,"403":"tO*","618":"a:mI%'","W":"{","6.7751085816232e+307":"","6.033928111090306e+307":"","1.2667324627453667e+308":"","2.926528901231718e+307":"E(90","1.4540822136417927e+308":1.7976931348623157e+308}
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = null
base_2[8] = null
base_2[1][8] = {"783":"D","":"","6.648664471301545e+307":"C","1.3892391742165722e+308":3.134409782720327e+307,"<ir":"","9.665197851445013e+307":"k^"}
return a/b+c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = -1
base_3[6] = {"705":460,"893":"<","":25,"4tXj|":"["}
base_3[1]['{X'] = 403
return a+b*c
};
var base_0 = [59,460,893,403,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,460,893,403,783]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,460,893,403,783]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,460,893,403,783]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)