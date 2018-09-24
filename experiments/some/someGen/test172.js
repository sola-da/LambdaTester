





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 59
base_0[2][5e-324] = 157
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = {"0":"C","49":607,"59":"8","618":0,"D":100,"8.296419606273616e+307":49,"-100":"","":2.1358029749138248e+307,"q":"r"}
base_1 = null
argument3[4] = false
return a/b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [-1,607,126,-100,655,49,0,-1,823]
return a+b-c
};
var argument5 = false;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = ""
base_3[8] = ["&","=#l",242,"xY",":$7`:",705,"e^t","h"]
argument8[2] = 213
return a/b-c
};
var argument8 = r_1;
var base_0 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test172.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)