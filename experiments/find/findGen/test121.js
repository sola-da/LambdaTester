





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = 714
return a/b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = "*"
return a-b*c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
base_2[3] = ""
argument8[1] = 9.558856873569777e+307
return a+b/c
};
var argument8 = {"0":1.611819434189038e+306,"627":"","893":"D","1.1975995924249525e+308":"","":843,"mI":122,"1.7976931348623157e+308":618,"5.68950665532673e+307":627,"6.828802070389855e+307":"","3.1955102073865713e+307":7.073676126547249e+307};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = [126,460,-1,126,122,25,49,607,655]
return a+b-c
};
var argument10 = {"1.0585792872590259e+308":""};
var argument11 = [82,242,-1,893,-1,-1,122,595];
var base_0 = [100,242,1.7976931348623157e+308,126,82,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,242,1.7976931348623157e+308,126,82,969]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,242,1.7976931348623157e+308,126,82,969]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,242,1.7976931348623157e+308,126,82,969]
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
require("fs").writeFileSync("./experiments/find/findGen/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)