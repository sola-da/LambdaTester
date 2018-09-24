





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = [655,"ws","RB",59,714]
argument3[1.0546776681946723e+308] = false
argument3[0] = false
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = "I"
base_1['length'] = {"705":5e-324,"S":"Fb","":157,"yf":"","3.9692369816058906e+307":"]","*":9.779922525650262e+306,"Y+0d]":""}
base_1[0][4] = false
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = {"7.657686596820273e+305":";","":9.390528288406946e+306,"HC":"z05","3.8092682121138437e+307":"i"}
argument5[ ] = ""
argument5[783] = ""
return a/b*c
};
var base_0 = [213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapGen/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)