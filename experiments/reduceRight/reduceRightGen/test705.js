





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = true
argument3['T'] = false
return a+b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[655] = {"4:vd":"","1.1270267643727471e+308":2.2015613148600135e+307,"T":126,"U":1.5721663785066872e+308}
base_1[3] = false
return a+b*c-d
};
var argument3 = {"157":"xY","":"e","1.7763952355961887e+308":"","1.1483898503935065e+308":"","4.085914547259411e+306":6.429811537890245e+307,"-100":1.2846022584847967e+308,"1.125654186105667e+308":"6@","2.7034750107470893e+307":655,"1.6407594021899624e+308":157};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
return a/b*c/d
};
var argument5 = r_2;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 2.415953068561665e+307
argument7 = false
argument8[7] = null
return a*b/c/d
};
var argument7 = r_3;
var argument8 = [",aq)8","3","pM","H_p^q","z:|C%b(SoO","qdBI","d"];
var base_0 = [25,607,122,213,242,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,607,122,213,242,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,607,122,213,242,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,607,122,213,242,-1]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test705.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)