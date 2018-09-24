





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = "Vv|`lt$5"
return a+b+c+d
};
var argument5 = 2.6147333999840865e+307;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = {"2":"","100":5.477980001045255e+307,"705":"","893":1.340128114440626e+307,"J":"{1","":7.717324337395375e+307,"4.777559944733011e+307":1.7657211688920654e+308,"I":"p$","&&":""}
return a/b*c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"655":"","":"z,","1.2003205649721552e+308":4.606457553422409e+307,"-1":8.542812008924557e+307,"7.38416293600931e+307":"","1.0526646436709863e+308":1.4572446287792212e+308,"Xf":823}
return a*b+c+d
};
var argument10 = null;
var argument11 = null;
var argument12 = null;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.1277822633002616e+308] = null
argument11[2] = {"607":1.6258452170581687e+308,"mPJ":"","5.943106094549105e+307":595,"5e-324":""}
return a+b+c+d
};
var base_0 = ["U","1",893,"BM","q-$T_q",242,"r"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","1",893,"BM","q-$T_q",242,"r"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U","1",893,"BM","q-$T_q",242,"r"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","1",893,"BM","q-$T_q",242,"r"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test715.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)