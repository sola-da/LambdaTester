





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = null
return a/b-c
};
var argument2 = [705,-100,242,823,460,595,25];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"705":"|","843":705,"<":"Ib","":"","6.735408102791063e+307":"X","-100":2.317924096085026e+307}
argument4[2] = {"":783,"1.3139832990286816e+307":1.6818448801584935e+308}
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = true
base_2[4][2] = null
base_2[7] = {"5":"","627":"","714":"e=","969":"x8","L":8.240952960374957e+307,"":"!;","k<b":2.6133178693536796e+307,"6.774146424567938e+307":1.7121561290336313e+307,"NrUx":1.7387712272618494e+308,"!j":59}
return a+b/c
};
var argument5 = 2.484864140796152e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
return a*b+c
};
var base_0 = [49,126,25,">B",627,242,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,126,25,">B",627,242,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)