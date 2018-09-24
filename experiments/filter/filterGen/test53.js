





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
argument2[2] = "'3)"
return a/b/c
};
var argument2 = {"126":"","9.610624921215409e+306":"d{&","1.0486508579470616e+308":4.189481383833853e+307,"":"","2.322253378668985e+307":"Ws"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
return a*b+c
};
var argument4 = null;
var argument5 = 1.3105740072120121e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = null
return a+b*c
};
var argument7 = null;
var argument8 = {"122":1.6768705602528107e+307,"460":9.773317451745164e+306,"655":"","OlG":"","8.97768001600169e+307":2.746181093833225e+306};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = 705
base_3[1][1] = null
base_3[2] = {"607":705,"655":9.175922697241083e+307,"783":"","YN":"Ck","1.1858882449484907e+308":"2","":"","p":6.04633110614551e+307,"nH":242}
return a/b-c
};
var argument10 = r_0;
var base_0 = [0,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)