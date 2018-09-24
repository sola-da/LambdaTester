





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = true
argument3[3] = -100
return a+b+c-d
};
var argument2 = null;
var argument3 = 1.1796077222578523e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2.819898637310108e+307] = {"5.770861782625059e+307":7.556122403172949e+307,"8.001338481077082e+307":3.942892574118458e+306}
argument5[1.738403780925446e+308] = 8.878467862028784e+307
argument6[1.1706227480013105e+307] = null
return a/b+c/d
};
var argument5 = {"618":"","=zz":126,"":1.2881850545159353e+308,"1.4958848499570807e+308":242,"6.897102400194486e+306":"#Se5","3>:":"9"};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['8('] = [49,-100,607,-100,-100,25,714,"q"]
return a-b*c*d
};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.624051682326797e+306] = {"607":9.010585674404473e+307,"":"","3.5967123003907573e+307":49,"t;Z":82}
argument9[213] = 595
return a/b+c+d
};
var argument9 = false;
var base_0 = [595,49,-1,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,49,-1,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,49,-1,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,49,-1,122]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test977.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)