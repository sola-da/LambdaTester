





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = {"843":893,"969":"","H":"`","6.099052379728981e+307":655,"":460}
base_0[0][3] = 705
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4250811791542279e+308] = null
argument3[1.738403780925446e+308] = [242,893,714]
base_1[9] = false
return a+b-c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"59":"8"," 6hf":705,"":"L@","CPMm":7.365435262128812e+307,"1.5841368111468126e+306":"3j","1.6388940185450864e+308":1.3348974803821201e+308}
argument4[1.738403780925446e+308] = ")"
return a/b*c-d
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = true
return a/b/c-d
};
var argument7 = ["{)",")P","#7i","DZ","<","U"];
var argument8 = [5e-324,5e-324,823,-100,705,-1,627];
var base_0 = [-100,213,"*Y",0,627,607,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,213,"*Y",0,627,607,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,213,"*Y",0,627,607,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,213,"*Y",0,627,607,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)