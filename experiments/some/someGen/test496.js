





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = false
argument2[1.6798476101238045e+308] = {"969":"Y","":5e-324}
argument1[0] = false
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = [595,618,403]
base_1[6] = ""
base_1[1][0] = 9.459471762029722e+307
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9] = [242,213,126,969]
argument5[7] = true
return a+b-c
};
var argument4 = 403;
var argument5 = {"618":1.0116789783994506e+308,"arc":"P","1.0727847755854773e+308":0,"1.045286888534624e+307":8.953280758046406e+307,"al":59,"":"%","1.4709242932709853e+308":1.2796166910905764e+308,"9.561886625579374e+307":1.6601168885259722e+308,"8.443975878740336e+307":"","1.4370273131269476e+308":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = 823
argument7['f9zgt4n!ZJR]W'] = [";"]
base_3[6] = "^g"
return a*b*c
};
var argument7 = r_1;
var argument8 = [627,607,595,242,655,403,100,213,82];
var base_0 = [1.7976931348623157e+308,627,5e-324,1.7976931348623157e+308,655,100,5e-324,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,627,5e-324,1.7976931348623157e+308,655,100,5e-324,242]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,627,5e-324,1.7976931348623157e+308,655,100,5e-324,242]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,627,5e-324,1.7976931348623157e+308,655,100,5e-324,242]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test496.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)