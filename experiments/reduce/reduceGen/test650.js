





var callbackArguments = [];
var argument1 = {"126":157,"213":"8s","403":4.28841482887892e+307,"893":9.572387305587407e+307,"":82,"1.790415264254658e+306":8.127671914536801e+307,"w":"","'":0,"5.803509227539847e+307":-1};
var argument2 = true;
var argument3 = 4.08405722737612e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = "y"
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = false
return a/b*c/d
};
var argument6 = null;
var argument7 = "I";
var argument8 = {"714":0,"783":655,"":"Q","8.416665620610308e+307":"m","Q":"rF","1.1968964937346895e+308":""};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[213] = 893
argument8[4] = false
argument6[2.1280896016417002e+307] = ""
return a/b*c+d
};
var argument10 = r_1;
var argument11 = null;
var argument12 = false;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = true
argument11[403] = 1.1314827778280469e+308
return a*b-c+d
};
var base_0 = [";%","P87RUJ3","{","zUTM","$P","$"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";%","P87RUJ3","{","zUTM","$P","$"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";%","P87RUJ3","{","zUTM","$P","$"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";%","P87RUJ3","{","zUTM","$P","$"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test650.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)