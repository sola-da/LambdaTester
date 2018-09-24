





var callbackArguments = [];
var argument1 = {"126":3.1949046322891006e+307,"595":1.7621003496451464e+307,"627":"","":618,"{":714,"7.799783236282764e+307":4.071947277385906e+307,"$k":"B","6.482383737978525e+307":"Y","lzU,u42":"3","x":8.7089615339048e+306};
var argument2 = true;
var argument3 = 460;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 2.818195810675386e+307
base_0[4] = ""
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = 1.7764251722251904e+308
argument7[1] = true
argument6[1.1277822633002616e+308] = null
return a+b-c*d
};
var argument6 = null;
var argument7 = [-1,"^Q","c",705,"Q",627,"N",783];
var argument8 = "";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
return a-b-c*d
};
var argument10 = r_1;
var argument11 = false;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"59":2.198582783884894e+306,"460":59,">":714,"":"gX","1.7184154437978565e+308":"lc","1.7976931348623157e+308":242,"bX1w":969,"6.851107718013919e+307":122}
return a-b/c*d
};
var base_0 = [100,-1,25,0,0,655,607,242,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-1,25,0,0,655,607,242,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-1,25,0,0,655,607,242,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-1,25,0,0,655,607,242,595]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)