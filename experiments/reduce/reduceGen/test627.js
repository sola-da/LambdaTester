





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ""
base_0[2][0] = ""
argument2[4] = {"0":"","783":"^","w":"2","6.589725931342485e+307":"vw","v":"","[":7.20018667488123e+307,"":1.5887552427096746e+308,"R":823,"-1":595}
return a/b/c*d
};
var argument2 = r_0;
var argument3 = false;
var argument4 = "-";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
argument3[25] = {"7":"qD@","":627,"U":"","1.630916160944558e+308":"","5.981349893725596e+307":"r","c":"e","2.921427741633233e+307":"jZ"}
return a*b+c/d
};
var argument6 = r_2;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = ""
return a-b*c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
base_3[0][9.12287810829114e+307] = 1.4786679664653532e+308
argument11[627] = true
return a*b/c*d
};
var base_0 = [893,460,893,122,403,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,893,122,403,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,893,122,403,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,893,122,403,969]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test627.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)