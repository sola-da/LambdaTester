





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.3130321063336282e+308] = {"595":"'n","607":1.0249373245685668e+308,"":"",")y":618,"1.3569266439525626e+308":""}
return a-b+c
};
var argument2 = false;
var argument3 = ["sG"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = "DC"
return a+b*c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3130321063336282e+308] = {"0":242,"":5e-324,"1.5650631499710127e+308":"","U%":"d"}
argument6[7.92397107964922e+307] = ["Rr","Aj","N@!","o","-5=","p","jK<mj"]
argument7[4] = {"403":714,"595":"","627":"","G":"","":"","[o&<":823,"sO":1.6369611182407262e+308,"4.796857440881667e+307":6.502633184939549e+307,"6j":"w]@' {q"}
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.3130321063336282e+308] = true
argument9[9] = 1.0804415478343272e+308
return a-b+c
};
var base_0 = ["LJ",":s","N","V","?h"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LJ",":s","N","V","?h"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LJ",":s","N","V","?h"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LJ",":s","N","V","?h"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test683.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)