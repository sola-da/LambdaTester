





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = ["aa","QZps"]
base_0[0][0] = 4.670663251997594e+307
base_0[0][9.12287810829114e+307] = null
return a+b/c/d
};
var argument2 = "8K#?";
var argument3 = true;
var argument4 = 460;
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.1869172855352885e+307] = 1.3570254587620819e+308
base_1[1][0] = [49,893,100,49]
return a*b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['s'] = null
return a*b+c*d
};
var argument9 = ["Er","M","uy_MPc","J","-"];
var argument10 = null;
var argument11 = 595;
var argument12 = false;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = [655,893,705,25]
argument11[7] = null
argument10['s'] = ["V","R","MOV5HaYZbm{","<"]
return a-b*c*d
};
var base_0 = [-1,607,122,823,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,607,122,823,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,607,122,823,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,607,122,823,595]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test248.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)