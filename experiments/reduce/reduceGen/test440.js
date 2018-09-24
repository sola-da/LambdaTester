





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = {"9":"","213":"n61(","_":595,"1.6127136192149104e+308":1.0534412691886433e+308,"1.7976931348623157e+308":-1}
argument1['s'] = ""
return a*b-c+d
};
var argument2 = [714,969,893,783,823,"H","t","r",25];
var argument3 = ["d",595,"D"];
var argument4 = ["om","xe2","a;5","&","=",";[$"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
base_1 = [100]
argument3 = {"783":627,"'":1.4496987819800046e+308,"1.6701609806703106e+308":1.1232360812401355e+308,"":25,",":-1,"4.1233521428060635e+307":"T"}
return a*b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['s'] = ["t}","U","j","D8","T","D"]
base_2[0][9.12287810829114e+307] = false
argument7[82] = ""
return a/b-c/d
};
var argument7 = false;
var argument8 = null;
var argument9 = false;
var argument10 = 6.508723330004878e+307;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6.35085648319999e+307] = 714
argument11['HMm'] = {"59":7.615698515207543e+307,"100":"8rE","460":1.53482170074939e+308,"627":5.673794047770341e+307,"783":"*^","823":"","6.62748682653705e+307":"","A":9.61048170678171e+306,"":"]"}
argument11[3] = false
return a/b*c+d
};
var base_0 = [59,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)