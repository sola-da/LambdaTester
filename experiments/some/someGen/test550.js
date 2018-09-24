





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
base_0[1][8] = {"2.34925722874895e+307":8.387984397929389e+307}
argument2['f'] = "wI"
return a-b*c
};
var argument2 = 4.929501416460626e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = {}
argument5[403] = ["J",59,595,"$h-",";","W`_6:"]
argument4[157] = "o r"
return a-b/c
};
var argument4 = {"126":"q","":"","6.506929612833831e+307":",","1.4116744704696113e+308":213,")":""};
var argument5 = 3.422899960587152e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = ""
argument7[3][3] = "#M"
return a/b-c
};
var argument7 = null;
var argument8 = "{";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.5109538778533692e+308] = {"969":"","c":1.7976931348623157e+308,"1.753153448333738e+308":49,"":3.1421982269267003e+307,"qDE":0}
return a-b-c
};
var argument10 = [969,1.7976931348623157e+308,460,607];
var argument11 = null;
var base_0 = [213,49,49,893,1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,49,49,893,1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,49,49,893,1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,49,49,893,1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)