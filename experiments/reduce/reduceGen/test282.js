





var callbackArguments = [];
var argument1 = "]";
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = false
base_0[6] = null
return a+b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = {"":1.1160914656590752e+308,"y":":@C=BN|D"}
argument5[2] = ""
base_1[1][3] = [618,655,122,783]
return a/b+c/d
};
var argument6 = true;
var argument7 = [100,213,"( F 2",5e-324,"0=gNm","*B@*","h",627];
var argument8 = {"1.3305599321998964e+308":1.6118041767553924e+308,"Yh7I1#":"","%":"8","2.686369876418535e+307":"P","":783};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 8.474078619748227e+307
return a/b/c-d
};
var argument11 = null;
var argument12 = null;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"9":595,"znd":"HW","Qt(":1.4313870189160007e+308,"1.4220383679586164e+308":"","":1.554000082675704e+308,"4.4089198799546335e+306":"","1.2410260258225736e+307":"Z","8ZFN":""}
argument12[';N'] = true
base_3[0][9.12287810829114e+307] = ["tL","H5v","%06"]
return a+b-c*d
};
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)