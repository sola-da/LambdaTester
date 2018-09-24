





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = {"242":"2m","%g@":100,"":1.1352205976993837e+308,"f3":"","IP":""}
argument3[655] = [-100,595,126,893]
return a+b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = [627,-100,618,714,5e-324,655,843,100]
argument3[3] = null
argument3[3] = null
return a*b*c+d
};
var argument3 = false;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = {"82":"","242":-100,"":"}3","1.0294410245657519e+308":"","1.2837265854986426e+307":969,"*":783,"p":"","1.0987470462176986e+308":5.778433413946648e+307}
argument6[2] = false
return a*b/c*d
};
var argument6 = ["N","U","cA]9","h;rh","{[c","9","#","D@"];
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['{S'] = {"1.1030311609674602e+308":1.1947730225234558e+308,"-100":25,"1.3242583840953983e+308":"","aLd":59,"<":122,"":""}
base_3[0] = 6.88137054830588e+307
return a+b-c/d
};
var argument9 = null;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test633.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)