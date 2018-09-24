





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 59
base_0[0][2] = 157
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"0":"C","49":607,"59":"8","618":0,"D":100,"8.296419606273616e+307":49,"-100":"","":2.1358029749138248e+307,"q":"r"}
base_1['length'] = null
base_1[6] = false
return a/b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = [-1,607,126,-100,655,49,0,-1,823]
argument5[0] = false
return a+b-c
};
var argument5 = 1.5598074828404158e+308;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ["&","=#l",242,"xY",":$7`:",705,"e^t","h"]
base_3[9] = 213
base_3[7] = [655,0,403,0,714,0]
return a/b-c
};
var argument8 = null;
var argument9 = r_1;
var base_0 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)