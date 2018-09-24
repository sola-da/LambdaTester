





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = {"82":595,"4<,":5.03541025728256e+307,"6.391517500371022e+306":1.0001369561101144e+308,"B#+":"","":":","1.7976931348623157e+308":655,"-1":126}
return a+b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = 655
argument3[2.1280896016417002e+307] = true
base_1[4] = "D+"
return a/b/c*d
};
var argument4 = ["cBb","+",607,595,"-","C"];
var argument5 = false;
var argument6 = [100,627,403,157,893,-1,126,157,627];
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[655] = null
argument6[403] = {"1.0749661174454474e+308":"","r":0,"":1.7976931348623157e+308,"5.942718957968762e+307":8.067119708485706e+307,"1.2050438555023564e+308":595,"w":6.520562252660526e+306,"7.256633653975998e+307":"",")'":"P"}
argument6[213] = {"49":"=Eudc@#","6.447566193969e+307":0,"$gO":""}
return a/b+c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = null
argument11[0] = null
return a+b+c*d
};
var base_0 = [213,823,213,843,893,157,242,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,823,213,843,893,157,242,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,823,213,843,893,157,242,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,823,213,843,893,157,242,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)