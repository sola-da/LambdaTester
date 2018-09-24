





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = {"0":"","618":"","1C":"","3.765532527993185e+307":"","r5":7.228006147286008e+306}
return a-b/c*d
};
var argument2 = false;
var argument3 = {"6":0,"59":"Czg","100":"Xz","705":4.4901730719304224e+307,"8.806446742627604e+307":1.3108041102388941e+308,"":6.416284580353275e+307,"-100":59,"V":403,"1.5822670313326497e+308":"","5.27190265530521e+307":1.1300201946896594e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ["le","}","r","|>","`",":c","3"]
return a+b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = ""
argument6[0] = ""
return a*b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = true
argument6 = false
base_3[2][2] = ["4zL71;p",627,"!K","m","3",25,5e-324,403,100]
return a*b-c+d
};
var base_0 = [823,655,213,157,-1,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,655,213,157,-1,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,655,213,157,-1,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,655,213,157,-1,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)