





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = 2.0101032799181201e+307
argument2[627] = 460
base_0[6] = ["{I","r","2m1V","tV=","m","12v"]
return a/b+c/d
};
var argument2 = {"49":1.3266639412411012e+308,"122":"","714":9.261990736725053e+307,"1.7789512598017868e+308":1.552358515675553e+308,"":"nQ","u":6.168965759983793e+307,"8.563029468192291e+307":"","?":"","6.07978942750508e+307":1.5572709302496122e+308};
var argument3 = "";
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['s'] = ["-;",595,"P4"]
return a-b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = false
argument7[3] = "c"
return a/b-c/d
};
var argument7 = r_1;
var argument8 = false;
var argument9 = r_2;
var argument10 = true;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.1280896016417002e+307] = {"3":7.544603705515057e+307,"655":"","":714}
argument9[9] = [969,213,607,705,-1,705]
return a*b-c-d
};
var base_0 = [403,714,-100,627,655,0,5e-324,823,-100,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,714,-100,627,655,0,5e-324,823,-100,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,714,-100,627,655,0,5e-324,823,-100,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,714,-100,627,655,0,5e-324,823,-100,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test453.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)