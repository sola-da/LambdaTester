





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = true
base_0[6][2] = null
return a*b+c/d
};
var argument2 = "";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['8('] = 1.6155877155465225e+308
argument5['!j'] = true
return a-b/c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = true
base_2[1][2] = {"0":"","3":"at","843":213,"1.5823332666692852e+308":"","xX":"","1.3280825941871563e+308":"42","":59,"Qav":783,"-100":893}
return a+b+c+d
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
argument9[1.4250811791542279e+308] = null
base_3[9] = {"59":783,"969":"I","4.693023185392685e+307":1.7976931348623157e+308,"":"fc"}
return a*b*c+d
};
var argument8 = {"242":"","7.409321026783806e+307":"#F","":"[ES!M","d":"2;"};
var argument9 = {"627":"","655":5.473476919467388e+307,"x-3V":6.468505220719751e+307,"9.484533795057188e+307":"","1.0237407685918637e+308":2.3621360007810896e+307,"":9.727772990737494e+307,"z":3.1056342423287e+307};
var base_0 = ["T+gh]","v","eW?=|h"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T+gh]","v","eW?=|h"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T+gh]","v","eW?=|h"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T+gh]","v","eW?=|h"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)