





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = "X"
return a-b/c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = true
argument5[3] = true
return a*b*c-d
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"59":823,"595":"","607":893,"618":"","655":"","":"u","ok(":7.584051725610258e+307,"A":"gP","?":"p","e":893}
argument8['K'] = ["7pN","S",1.7976931348623157e+308]
return a/b-c*d
};
var argument8 = null;
var argument9 = 2.6168925046916963e+307;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 1.5936945812716467e+308
return a*b/c*d
};
var argument11 = 1.7976931348623157e+308;
var argument12 = null;
var base_0 = [0,"ey1=",213,213,"Z",655,157,"q"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"ey1=",213,213,"Z",655,157,"q"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"ey1=",213,213,"Z",655,157,"q"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"ey1=",213,213,"Z",655,157,"q"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)