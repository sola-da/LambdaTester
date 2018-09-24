





var callbackArguments = [];
var argument1 = true;
var argument2 = true;
var argument3 = {"^Hv4":"","":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"7.067217239634034e+307":1.315085551899745e+306,"1.2069953128675315e+308":"M","?":1.108767699144405e+308,"1.6004113958436689e+308":""}
argument3[403] = ["|","VHNp","c","%j"]
base_0[0] = 655
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "1r"
return a/b-c*d
};
var argument6 = r_1;
var argument7 = r_1;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.1869172855352885e+307] = [783,25,655,1.7976931348623157e+308,213,213,403,460,607,460]
argument7[1.1277822633002616e+308] = [714,0,893,705]
argument7[82] = ["8LoC","gJ","v"]
return a*b+c+d
};
var argument10 = null;
var argument11 = null;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = 2.0424299910960007e+307
argument11[82] = "mu"
argument12 = null
return a/b+c*d
};
var base_0 = [595,"O",0,714,"7SR","r","O",618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"O",0,714,"7SR","r","O",618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"O",0,714,"7SR","r","O",618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"O",0,714,"7SR","r","O",618]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)