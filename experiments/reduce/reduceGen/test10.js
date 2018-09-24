





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = {"49":"%","C":460,"A":")1","":714};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [595]
return a*b/c/d
};
var argument5 = 1.454749002341163e+308;
var argument6 = "U";
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = true
base_1['length'] = ""
return a/b-c-d
};
var argument9 = r_1;
var argument10 = r_1;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"403":"","618":"","893":"ycA1r;_","":893,"6.625527806389795e+307":843,"1.1109514721227221e+308":":","uEa":"","2:":403,"HG4":"z3"}
base_2[5] = 783
return a-b-c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ["l{",242,242]
return a+b+c*d
};
var argument14 = r_1;
var argument15 = {};
var base_0 = [595,1.7976931348623157e+308,49,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,1.7976931348623157e+308,49,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,1.7976931348623157e+308,49,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,1.7976931348623157e+308,49,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)