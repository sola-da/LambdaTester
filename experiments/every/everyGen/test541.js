





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0['length'] = {"82":"","705":"m","1.102838347044502e+308":618,"^M":""}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = false
base_1[9] = {"100":"","2.667092227125665e+307":"C2","":"j{i+","7.494019936296064e+307":"l","4.548870669695314e+307":"E1C","t":"q","1.0703916863578615e+308":"uN","5e-324":"oiO"}
return a-b+c
};
var argument3 = 1.2202269047811482e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = "6"
base_2[0][0] = {"0":9.761215985509356e+307,"126":1.5761455651051422e+308,"969":"","":"","%zo":823,"6.684418090550874e+307":82,"1.1658589878322381e+308":1.0328205826461224e+308,"A8":1.293232150739511e+307,"3.9467524199938466e+307":403}
argument5[3] = 1.7870234337418953e+308
return a+b*c
};
var argument5 = {"843":"xb`6!i","893":6.401579245790635e+307,"4.893568887305866e+307":"","":"","&":":zLtq"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["*R",")c"," ","^+","WlU","Y","kp","-j","9"]
base_3[0][6] = "f){"
return a-b*c
};
var base_0 = ["S},","a ","J","&","%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S},","a ","J","&","%"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S},","a ","J","&","%"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S},","a ","J","&","%"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)