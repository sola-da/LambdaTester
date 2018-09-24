





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = "vd"
return a+b-c
};
var argument2 = true;
var argument3 = {"126":"U","2.2015613148600135e+307":"T","1.5721663785066872e+308":"","1.6785532724028883e+308":655,"6.912818474171462e+307":1.7763952355961887e+308,"":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [969]
argument6[126] = true
base_1 = {"25":"@","403":"","823":1.4786311505895691e+308,"2.241984359110215e+307":82,"2.7034750107470893e+307":655,"1.6407594021899624e+308":157,"":4.3558235784565994e+307,"4.667661998258042e+307":"","&":""}
return a*b+c
};
var argument5 = [-100,",","N}","u,aq)8","3","pM",242,157,969];
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = {"%b(SoO":1.5751302811929199e+308,"":"","#vd":714}
return a/b-c
};
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['LK'] = {"7.322094730655487e+307":4.411206872529794e+307}
argument11[969] = null
argument11['AO?'] = false
return a/b-c
};
var argument10 = null;
var argument11 = true;
var base_0 = ["Vp",";Z%"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Vp",";Z%"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Vp",";Z%"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Vp",";Z%"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test703.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)