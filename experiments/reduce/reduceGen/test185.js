





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = 59
return a*b/c*d
};
var argument2 = 1.3472584254847714e+308;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"126":1.0329826830282267e+306,"1.357504452526813e+308":"i6r","":"","-1":""}
argument5[4] = "B"
return a/b+c-d
};
var argument4 = null;
var argument5 = [59,403,607,843,126,122,-100];
var argument6 = false;
var argument7 = "";
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = false
argument7[7] = 3.398302943970551e+307
return a*b*c+d
};
var argument10 = null;
var argument11 = {"213":714,"1.3376965867995523e+308":3.2934903524550284e+307,"8.780155907926642e+307":9.89434981119631e+307,"":-100,"1.5196540797749313e+308":"eR","6.763463921188818e+307":-100,"1.3693583679480502e+308":"Zcc>PH[yD","${H,N":5.878866558346786e+306,"1.7245637343978534e+308":"I"};
var argument12 = "$YQ";
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[403] = {"0":"","25":1.7421855288271779e+308,"893":"`C","":""}
return a*b*c-d
};
var base_0 = ["R","f"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","f"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R","f"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R","f"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test185.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)