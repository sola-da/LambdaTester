





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"627":49,"893":"","Py":"","1.6977353171669054e+308":6.110050681098983e+307,"x":"","":3.012078760003689e+306,"V":655}
argument3[783] = {"0":"{G","403":823,"893":"","":1.4054432826557633e+308,"(":"","p=":"e&","1.2369760275049482e+308":"","O":893,"4.0567380895672796e+307":126,"1.3677256100822275e+308":""}
argument3[6] = null
return a*b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = true
argument5[1.399309004356655e+308] = [":","G","X_g","c","9Ae}","Q","E%","BMq","Y"]
return a*b+c
};
var argument5 = {"595":"w","655":"","893":"","Z":5.318086128366384e+307,"2.3412535508078415e+307":"","":"","1.7976931348623157e+308":"8","6.870273469026451e+307":627,"2.3866650431726305e+307":1.389285210791423e+308};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = 1.2585771503879867e+308
argument8[4] = ""
return a*b-c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[100] = ["W","cd","L","u","X8","d","O","a<","F"]
return a+b*c
};
var argument10 = "^";
var base_0 = ["O",-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O",-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O",-100]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O",-100]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)