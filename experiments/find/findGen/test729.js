





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"48":"","82":"p!)","783":705,"1.7976931348623157e+308":"","wD&li-":0,"is*?":823,"1.399763580551872e+308":4.7162959698809974e+306,"":"ba"}
base_0[0][6] = [893,25,627,595,893,242,25,595,5e-324,59]
return a/b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.7261030733891165e+308] = true
argument6[4.953791384496108e+307] = [126,25]
return a-b/c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AO?'] = [843,1.7976931348623157e+308,627,59]
argument8[100] = true
base_2[8] = 1.5498959215134161e+308
return a+b*c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = 595
return a/b/c
};
var argument10 = {"122":1.7976931348623157e+308,"893":6.350847897633278e+307,"7.303204006555112e+307":1.5128924247325503e+308,"*":"","5.667366834357572e+307":"","<e":"'V`'"};
var argument11 = r_3;
var base_0 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
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
require("fs").writeFileSync("./experiments/find/findGen/test729.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)