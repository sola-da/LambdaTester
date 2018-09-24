





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = {"126":"","242":"=5KF=)'lK","=":"","9.697199010484112e+307":1.2741711974579375e+308,"-1":1.7488080830457287e+308}
base_0[6] = [-1,893,627]
return a/b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"59":9.472446949679674e+307,"7.446700080263965e+307":969,"iE":618,"":1.4574099475190624e+308}
base_1 = false
argument4[2] = ""
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = {"2":"C","100":1.0187261457436787e+308,"403":5.714486227571787e+307,"":122,"+":403,"r":1.6450802397680713e+308,"w":9.749840516947277e+307,"<":"","4.1287088569249626e+307":""}
argument5[403] = 122
argument5[403] = "F,[akEQ"
return a*b+c
};
var argument5 = [893,"s",1.7976931348623157e+308,"T",460,126,49];
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = false
return a+b/c
};
var argument8 = true;
var argument9 = null;
var base_0 = [893,783,627,893,242,460,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,627,893,242,460,157]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,627,893,242,460,157]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,627,893,242,460,157]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test30.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)