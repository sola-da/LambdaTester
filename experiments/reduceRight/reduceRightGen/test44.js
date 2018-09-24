





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = "'rA"
base_0[5] = null
argument1[1] = 893
return a+b-c+d
};
var argument2 = true;
var argument3 = {"1.6621727021244832e+308":6.968532289606721e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"843":5.012270467877016e+307,"":823,"5.837679837779132e+307":""}
return a*b-c-d
};
var argument5 = ["l","$g","sY;","W8","K"];
var argument6 = {"X8wq[":"u;"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = "I-k"
base_2[0] = false
return a+b*c+d
};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"783":4.666656114562914e+307,"823":242,"893":"","969":100,"l":100,"1.3066414654146705e+307":"*1l","3.924069279993133e+306":"","*kxH1DZ":1.6631238688668988e+308,"":893,"8.337026880318526e+307":""}
return a*b+c*d
};
var argument10 = false;
var argument11 = "";
var base_0 = [-100,126,242,157,607,-100,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,126,242,157,607,-100,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,126,242,157,607,-100,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,126,242,157,607,-100,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)