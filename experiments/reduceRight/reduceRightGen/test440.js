





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ["0","mV","=","S&uN","0","u","^0","OF#b","1","E"]
return a*b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
argument4['8('] = null
argument3['v'] = {"157":"","1.3308451984833449e+308":"","ZD":1.5223803714358622e+308,"2.533176697268785e+306":"k","":595,":":1.014994970738454e+308}
return a-b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = {"893":242,"ayP*":"WI'","1.6277253588202245e+308":1.6240513495674965e+308,"2.957441223204583e+307":3.61313673481431e+307}
argument4[1.738403780925446e+308] = null
return a+b-c-d
};
var argument4 = {"1.9021187005444514e+307":1.4055916664301747e+308,"":1.591659080187255e+308};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [100,893,0,705,595,122,893,655,607]
return a/b-c*d
};
var argument7 = r_1;
var base_0 = ["9cB","4",-1,"4",242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9cB","4",-1,"4",242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9cB","4",-1,"4",242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9cB","4",-1,"4",242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)