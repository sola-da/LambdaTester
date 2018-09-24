





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = [705,122]
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['AO?'] = 714
argument4 = "p"
base_1[1][2] = true
return a/b*c
};
var argument4 = null;
var argument5 = {"5":"","627":"","714":"e=","969":"x8","L":8.240952960374957e+307,"":"!;","k<b":2.6133178693536796e+307,"6.774146424567938e+307":1.7121561290336313e+307,"NrUx":1.7387712272618494e+308,"!j":59};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = true
base_2[3] = ""
argument8['AO?'] = [59,595,100]
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[460] = false
base_3[3] = null
argument9['AO?'] = null
return a-b/c
};
var argument8 = r_2;
var base_0 = [460,595,100,655,59,403,823,242,705,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,595,100,655,59,403,823,242,705,705]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,595,100,655,59,403,823,242,705,705]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,595,100,655,59,403,823,242,705,705]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)