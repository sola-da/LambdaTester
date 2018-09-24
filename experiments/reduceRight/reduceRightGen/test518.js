





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['UU'] = null
return a-b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1207829086460726e+308] = {"893":1.3971804435753558e+308,"1.504045168213671e+308":"8","1.5486040849173945e+307":783,"Kv":"7B[w","6.148547095760067e+307":"BRgm"}
argument4[3] = ["bT8@b","Mjw`_p","(u","#"]
argument3['v'] = {"0":783,"618":627,"823":969,"1.2498628261446213e+308":"V6","8.538052353954431e+307":893,"":"^)","^Z":"","}":";"}
return a*b*c/d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['{S'] = null
return a/b+c*d
};
var argument5 = r_0;
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"82":"i","":"","V":"kx*"}
argument9['UU'] = [714,126,-100,-1,-100,213]
argument8['y'] = ["{","#","=","q","WQd","!","5","@","O"]
return a-b/c+d
};
var argument8 = null;
var base_0 = [100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test518.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)