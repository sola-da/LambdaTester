





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ""
argument2[0] = null
argument1 = 4.2612683514420076e+306
return a+b+c*d
};
var argument2 = 7.948394188760641e+307;
var argument3 = {"6":969,"76":157,"122":-100,"705":2.8960878004927236e+307,"714":969,"823":403,"":"","1.1713102259137485e+308":122,"-1":157,"4.569121999424319e+307":"$"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = {"4(":"","$F":-1,"2.3497987878778656e+307":"-b>"}
base_1[4][3] = null
argument5['{S'] = {"6.282614900165236e+307":"","{":4.65139312568855e+307,"L":"","1.6113447662934646e+308":6.169225457711486e+307,"1.4097535617144758e+308":1.2702672124326108e+307,"1.7522599687829822e+308":"4"}
return a/b*c-d
};
var argument5 = [618,0,893,843,607,595];
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['w'] = [25,5e-324,"hs",":","n>yB"]
argument7[1] = [783,460,122,460]
return a+b-c-d
};
var argument8 = true;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = false
base_3[7] = [823,403,705,403,823,25,25,714]
argument12[6] = [-100,705,5e-324,-1,627,823,122,714,607]
return a+b/c/d
};
var base_0 = ["pt",969,"B","(!h","l","dL5",783,627,"%"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["pt",969,"B","(!h","l","dL5",783,627,"%"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pt",969,"B","(!h","l","dL5",783,627,"%"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pt",969,"B","(!h","l","dL5",783,627,"%"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)