





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
base_0[2] = ""
argument3['!j'] = "^"
return a+b+c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = true
return a/b*c
};
var argument5 = 4.183438880573497e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = ""
argument7[0] = true
base_2[1][6] = null
return a-b+c
};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[100] = {"JP":1.3182229800068151e+308}
base_3[3] = {"1.7970476788607645e+308":")LW","":""}
return a/b-c
};
var argument10 = {"242":655,"%":"","sw":-1,"_":"","2.1907688447907347e+307":2.486112297143145e+307,"1.3501478214930876e+308":6.577302108571356e+307,"":"","5e-324":"","1.141925063070592e+308":""};
var base_0 = [1.7976931348623157e+308,607,25,893,607,242,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,607,25,893,607,242,49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,607,25,893,607,242,49]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,607,25,893,607,242,49]
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
require("fs").writeFileSync("./experiments/find/findGen/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)