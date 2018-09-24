





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = true
base_0[6] = null
return a+b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = true
argument3[1.738403780925446e+308] = {"627":7.767857224792763e+307}
return a/b/c+d
};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.8120440085202614e+307] = "0"
argument5[4] = [100,59,0,126,705,655,25,157,783]
return a/b*c-d
};
var argument5 = r_1;
var argument6 = 157;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [460,"j",969,122,"e,pT=","P",607,25]
argument8['{S'] = 1.7976931348623157e+308
argument8[1.1207829086460726e+308] = {"893":1.0924698210301318e+308,"":"","1.722020396447564e+308":1.4442440560808262e+308,"y$5":"]DR"}
return a-b/c*d
};
var argument8 = null;
var argument9 = ["R6pR","m","C${","6%","=M","j*","MI","eKo","Pd"];
var base_0 = [1.7976931348623157e+308,82,823,-100,49,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,82,823,-100,49,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,82,823,-100,49,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,82,823,-100,49,403]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test546.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)