





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = [823,714,242,49,595,627,59,460,595,100]
argument1[9] = 705
argument3[4] = true
return a/b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = [-100]
argument6[5] = -100
return a*b-c/d
};
var argument6 = ["0q0,","__",969];
var argument7 = [705,595,157,59];
var argument8 = [122,893,"d","U",100,157,460];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1532786076532189e+308] = false
argument6[2.1869172855352885e+307] = null
return a-b-c+d
};
var argument10 = r_3;
var argument11 = "#2";
var argument12 = [213,25,0];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = ""
return a/b-c-d
};
var base_0 = [126,655,100,157,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,655,100,157,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,655,100,157,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,655,100,157,122]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test781.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)