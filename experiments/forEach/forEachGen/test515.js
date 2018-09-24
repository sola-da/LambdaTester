





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 1.6758899348573347e+308
argument2[6] = 618
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
argument3['-'] = true
return a-b+c
};
var argument3 = null;
var argument4 = {"1.742553627095605e+308":":","4.576109446403733e+307":122,"6.663835997025413e+307":"!4","":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [595,655]
argument6[3.0481490052276395e+306] = 655
return a+b/c
};
var argument6 = [460,843,-1,213,-1,460];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 4.1196284804407403e+307
argument8['wIs'] = null
return a/b+c
};
var argument8 = 5e-324;
var base_0 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test515.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)