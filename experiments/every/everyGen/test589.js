





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = false
argument2[1] = {"714":"","-100":"@","2.032129315444174e+307":"","4.735436115502806e+307":1.495989553641834e+308,"1.7976931348623157e+308":"","":"","5.575596295363419e+307":893}
base_0[3] = 705
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = [5e-324,627]
base_1[2] = ""
argument2 = true
return a-b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = "?"
return a+b/c
};
var argument5 = {"714":1.626654042595582e+308,"2yt":":K",">":2.897105586112382e+307,"1.6175423644592979e+308":"^k","5.370570628624881e+307":5.6706340917245e+306,"m":1.7905309654251676e+308,"P":6.343599369344012e+307,"3.45702888525398e+307":8.811285036309744e+307,"":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [403,783,82,49,1.7976931348623157e+308,82,893,843,705]
return a*b+c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = ["+","qK_","Cd","U?R"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","qK_","Cd","U?R"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","qK_","Cd","U?R"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","qK_","Cd","U?R"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test589.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)