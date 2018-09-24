





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = {"655":"","7.928422522139007e+307":460,"i":"","":"","H)u-Q+":1.5617021763148979e+307,"?dv'D":0,"9.473948695566654e+307":6.679455611304265e+306,"hrK":""}
base_0[1][0] = [783,893,":",242,"w#","?_",714]
base_0[4][2] = 8.911837704237913e+307
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = true
return a*b/c
};
var argument3 = 4.590995129888318e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"9":"","122":627,"595":2.842419955744942e+305,"705":1.2300866082677301e+308,"823":1.5537308027777035e+308,"":"?","5h}":"","1.2942029353441755e+308":"f<,"}
argument5[6] = true
return a+b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = null
argument8[-100] = true
base_3[0][4] = [783,49,157]
return a-b*c
};
var argument7 = null;
var argument8 = r_1;
var base_0 = [1.7976931348623157e+308,705,655,893,460,655,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,705,655,893,460,655,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)