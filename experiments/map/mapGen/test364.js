





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = [783,595,893,-100]
return a/b/c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [242,607,"Zl",213,25]
base_1[0][0] = 1.3848961177274233e+308
return a+b*c
};
var argument5 = null;
var argument6 = 3.0913719879707845e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = "+"
argument8[1] = {"":"R_6}"}
base_2[3][1] = {"9":"","618":"{d,","714":460,"6.057992580806615e+307":1.7055360203662907e+308,"":"","4.947335672747997e+307":1.7693423705193614e+308}
return a-b-c
};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = {"0":"=","100":3.393442888848869e+307,"242":"}","618":"","i":"","7.76535490148246e+307":82,"3.659453639482625e+307":59,"R":8.883447834267253e+307,"1.571761451518634e+308":""}
argument11 = [460,126,5e-324]
base_3[7][2] = 627
return a*b+c
};
var argument11 = "";
var argument12 = r_3;
var base_0 = [213,157,655,893,59,893,627,843,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,157,655,893,59,893,627,843,618]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)