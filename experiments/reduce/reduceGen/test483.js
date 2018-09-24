





var callbackArguments = [];
var argument1 = true;
var argument2 = 460;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = false
base_0[1] = ""
base_0[0][9.12287810829114e+307] = false
return a*b+c/d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = ["4","H;;","mH","G","CJO","[","[n","JE"]
return a/b+c+d
};
var argument9 = 607;
var argument10 = null;
var argument11 = ["DRQv",">%","Z","l","p"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[595] = ""
argument11[25] = "`"
argument11[3] = [213,618,823,157,618,49]
return a*b/c*d
};
var argument13 = null;
var argument14 = null;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][0] = 1.1108121455130553e+307
argument14[';N'] = ""
return a+b/c-d
};
var base_0 = [126,403,-100,595,714,403,0,893,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,403,-100,595,714,403,0,893,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,403,-100,595,714,403,0,893,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,403,-100,595,714,403,0,893,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test483.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)