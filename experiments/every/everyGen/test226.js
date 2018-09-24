





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
base_0[2] = 1.2520096545116445e+308
return a*b/c
};
var argument2 = {"213":"","242":1.792196639031832e+308,"":627,"4.613379241129689e+306":"hP|j4","-1":783,"1.188599934911117e+308":"","-100":714,"5.087495193218676e+307":5e-324};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = true
base_1[2] = 126
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ">"
base_2[7] = false
return a-b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
argument7[2] = ["dTu","Xr@z","r0Ub","u","&","W","XX","V)"]
return a-b/c
};
var argument7 = r_0;
var argument8 = {"1":2.460852935942085e+307,"8":213,"242":460,"1.2612980249912772e+308":")","&":82,"5e-324":9.460068054429244e+307,"":157,"4Q?":"K","1.7425885189714418e+308":893,"1i":403};
var base_0 = [823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823]
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
require("fs").writeFileSync("./experiments/every/everyGen/test226.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)