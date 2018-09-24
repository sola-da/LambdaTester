





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"[V,G":"m","9.54066081381318e+307":4.778494890035141e+307,"6i":893,"5.234095620831552e+307":"d","":1.6855646131104855e+308,"N":823,"1.729139208544699e+307":""}
argument3[783] = true
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['^h'] = {"595":-100,"783":5.375453495626297e+307,"969":"","":969,"9.743152409865794e+307":705,"1.6507636162749886e+308":49,"SB":"","N":1.7976931348623157e+308,"1.7879761048058322e+308":""}
base_1[1][2] = {}
base_1[0][3] = [893,"Y2","1"]
return a+b*c
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[969] = "1O"
argument7['j'] = {"823":"D","1.2907172020117275e+308":8.201920602253908e+307,"%":655,"":"","Z":""}
argument7[25] = false
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][4] = {"1.2893899105048146e+308":"m_v9)"}
base_3[6] = [82,403,82,893,823,5e-324,969,59,969]
argument8[242] = ["YA7s","H","|l=o","A>","QgG","z","P","7D)","A]"]
return a+b/c
};
var base_0 = [627,893,82,705,82,-1,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,82,705,82,-1,49]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,893,82,705,82,-1,49]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,82,705,82,-1,49]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)