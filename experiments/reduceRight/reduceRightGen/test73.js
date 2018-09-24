





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = "X"
return a*b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = "N+"
argument3['w'] = 4.531578510613035e+307
return a+b/c/d
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 7.495392489751525e+307
argument7['!j'] = {"893":")","6.200890908436524e+307":6.629762941077335e+307}
return a+b*c*d
};
var argument6 = {"705":595,"I":"r","@H8":1.733497942476844e+308,"":7.920235713513109e+307,"TEN7":1.6195410279783232e+308};
var argument7 = r_2;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = null
base_3[4] = {"49":25,"100":"f,","843":"","893":7.332315525904132e+307,"":1.261529410301864e+308,";":595,"1.4244318594815474e+308":"@3","-100":100,"3.992219666863813e+307":""}
return a+b/c+d
};
var argument9 = r_1;
var argument10 = false;
var base_0 = ["So&","^"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["So&","^"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["So&","^"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["So&","^"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)