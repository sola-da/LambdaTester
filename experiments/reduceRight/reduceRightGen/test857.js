





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = {"595":"","655":"o","893":"","1.2955883744597384e+308":"|","y":"86","":1.2986290025796278e+308,"1.7976931348623157e+308":714,"1.4497884879678071e+308":595,"-K":3.2415278374068876e+307,"5.619056980899075e+306":-1}
base_0['length'] = {"49":4.334535100674145e+307,"q":"'P"}
return a-b/c/d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['UU'] = ""
return a/b/c+d
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[-1] = [893,59]
argument8[8] = {"25":"1","49":9.112142975071625e+307,"126":8.803859979807458e+307,"242":"v0BH","403":"9","1.3372724449239615e+306":"","1.1541650963475817e+308":"UEoT%"}
argument9[6] = 126
return a+b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[100] = true
return a-b+c+d
};
var argument9 = [82,213];
var argument10 = [-1,893,843,627];
var base_0 = [627,607,126,"5&","ZN"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607,126,"5&","ZN"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607,126,"5&","ZN"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607,126,"5&","ZN"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)