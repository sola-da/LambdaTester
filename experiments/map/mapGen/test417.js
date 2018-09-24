





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = [627,1.7976931348623157e+308,122,242,607,595,969,783]
base_0[0] = "KK"
return a/b-c
};
var argument2 = 8.933817660336152e+307;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2] = 1.50123278977042e+308
argument5[49] = 1.0044787465927002e+307
argument5[1] = null
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
argument6[893] = {"G2":"'","":783,"3.462967293930506e+307":"","W)":595,"exu":"","1.2199143612541599e+308":"","1.685816526105524e+308":6.235255050086651e+307}
argument6[4] = {"82":843,"969":"g-Dqc","9.203320940871265e+307":"","":"","9g=PJ[":2.3189906211508394e+307,"7.502840951648477e+307":"I@lt","Lx":1.703112925501128e+308,"(P":843,"@0":"","O":3.3547422629518304e+307}
return a-b*c
};
var argument6 = {"655":1.0818764446668689e+308,"705":"K9","969":3.4649012756673684e+306,"2.437557447989686e+307":49,"$`if:*":5.919169425984781e+307,"5.161552945539336e+307":"","C":2.3306132123697307e+307,"":59,"5.486218132910182e+307":"3","*":"l"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {}
return a/b*c
};
var argument8 = "I7l`";
var base_0 = [403,607,0,49,705,-100,126,893,969,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,607,0,49,705,-100,126,893,969,59]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test417.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)