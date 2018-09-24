





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = "B@"
return a/b/c
};
var argument2 = null;
var argument3 = {"9.318422861550344e+307":2.1149299632611063e+307,"":"'9V"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [49,969,655,25,607,705,893,403]
argument5[1.9097830510613482e+307] = null
argument5[122] = ["K",-1,")HH","7L","rKF7","be",-100,1.7976931348623157e+308,893,"Y{"]
return a*b*c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.6706143966770798e+306] = ["h","h",122,"C",705]
return a/b*c
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 8.043031532699302e+307
argument11[1.6706143966770798e+306] = ""
return a/b*c
};
var base_0 = [403,"Jg",783,"[",655,"Ch",49,157,126]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"Jg",783,"[",655,"Ch",49,157,126]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"Jg",783,"[",655,"Ch",49,157,126]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"Jg",783,"[",655,"Ch",49,157,126]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)