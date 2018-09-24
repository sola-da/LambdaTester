





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [893,25]
argument2[7.463432409233234e+307] = "Ad]F"
base_0[4] = {"4.500584029542636e+307":"","';6":"","1.4892556739557607e+308":"","n":9.95096299958929e+306,"#=":"","*":0,"1.7976931348623157e+308":"","1.279765668164094e+308":25}
return a-b/c/d
};
var argument2 = [705,714,595,783];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[82] = ["X"]
return a*b-c+d
};
var argument4 = [893,126,-100,126,893];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = null
base_2[4] = "PF"
return a+b/c+d
};
var argument6 = {"242":655,"893":">Xf|AYQ;ZU","":"[=;","t":"C|","1.3541577858684786e+308":"","5e-324":-100,"l<j":"v","5.615573729974503e+307":3.949789806882995e+307,"1.4458147143432193e+308":""};
var argument7 = r_1;
var argument8 = true;
var argument9 = r_3;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = false
argument7[1] = "ACCD2["
base_3[0][0] = [655,5e-324,843,100]
return a-b/c*d
};
var base_0 = [607,49,1.7976931348623157e+308,100,0,242,25,82,627,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,49,1.7976931348623157e+308,100,0,242,25,82,627,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,49,1.7976931348623157e+308,100,0,242,25,82,627,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,49,1.7976931348623157e+308,100,0,242,25,82,627,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test372.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)