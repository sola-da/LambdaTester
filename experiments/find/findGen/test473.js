





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 1.3779481650833893e+308
base_0[1][6] = 7.993834425872552e+307
base_0[0][6] = ""
return a-b-c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.377960715099946e+307] = null
base_1[7] = 82
argument6[100] = {"213":"","595":"Tx!zA","783":"'","1.8740568091084975e+307":59,"Qq":2.361506531736338e+307,"1.7976931348623157e+308":""}
return a+b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][7] = {"!v":8.919963079710478e+307,"O":"]G","1.7976931348623157e+308":"","K#":1.050688666360235e+308}
base_2[1][2] = ""
base_2[1][0] = {"25":"","122":59,"823":"+","d":705,"":"","!g":"]8"}
return a-b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1881593224845412e+308] = 122
argument9[1] = null
return a*b/c
};
var argument8 = false;
var argument9 = 1.5827689055369197e+308;
var base_0 = ["9@s[","S","p","-D","=s,m"," 7v ","m"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9@s[","S","p","-D","=s,m"," 7v ","m"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9@s[","S","p","-D","=s,m"," 7v ","m"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9@s[","S","p","-D","=s,m"," 7v ","m"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test473.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)