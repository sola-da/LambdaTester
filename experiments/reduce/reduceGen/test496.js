





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
return a*b*c*d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"49":2.7912324625688437e+307,"705":"z","783":242,"823":59,"jJ":1.5767346472025272e+308,"|d":403,"-100":2.9477498575346417e+307,"1.2850011987302841e+308":823,"7.287183722620789e+307":"K,O"}
base_1 = 2.3380495469783683e+306
return a/b/c*d
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = {"3.277730901624811e+307":460}
return a+b-c/d
};
var argument8 = null;
var argument9 = r_1;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[';N'] = null
argument12[403] = null
argument11[5] = 4.811983672296274e+307
return a/b-c+d
};
var base_0 = [714,969,-100,0,823,893,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,-100,0,823,893,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test496.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)