





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = "vG"
base_0[7] = null
base_0[0] = ""
return a+b-c+d
};
var argument5 = true;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = [843,969,969,59,122,969,82,823,823]
return a*b+c*d
};
var argument9 = r_1;
var argument10 = false;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ["9","T"]
argument11[25] = [627,460,82,607,823]
return a*b-c-d
};
var argument13 = r_2;
var argument14 = r_2;
var argument15 = {"607":1.210161742426396e+308,"":2.561336142097005e+307,"6.507010463247959e+307":"d3@l:X","1.3463846670573565e+307":1.7923672090091928e+308,"7.271194427208734e+307":"GX+OrY'c^","6.29066889608166e+306":-1,"5e-324":460};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
return a-b*c/d
};
var base_0 = ["j","M","a","vd","B"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","M","a","vd","B"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","M","a","vd","B"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","M","a","vd","B"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)