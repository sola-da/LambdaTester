





var callbackArguments = [];
var argument1 = null;
var argument2 = [157];
var argument3 = 969;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = false
base_0[0][0] = {"":1.5750404250813086e+308,"1.582799487504701e+307":"","N":893}
return a*b-c-d
};
var argument5 = null;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = {"969":"N","":1.1779433667189308e+306,"5.375453495626297e+307":"SB","1.7976931348623157e+308":1.7879761048058322e+308,"4.612711996148714e+307":893}
argument5[9] = 1.4497345688265932e+307
return a/b+c/d
};
var argument9 = 6.519449407525502e+307;
var argument10 = "";
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = "1O"
argument11['*c'] = {"823":"D","1.2907172020117275e+308":8.201920602253908e+307,"%":655,"":"","Z":""}
argument9[0] = false
return a*b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 1.7493521928918887e+308
argument14[82] = "m_v9)"
base_3[5] = [82,403,82,893,823,5e-324,969,59,969]
return a+b/c/d
};
var base_0 = ["D6i","c",">d",627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D6i","c",">d",627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D6i","c",">d",627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D6i","c",">d",627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test809.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)