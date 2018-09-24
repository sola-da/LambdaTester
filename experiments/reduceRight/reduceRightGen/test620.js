





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = 8.124790613565257e+307
argument2[2] = {"2":3.938622188151082e+307,"100":1.3651110008653648e+307,"8.772499955497521e+307":627,"n":"",">":"","":"","7.106773843544012e+307":"y"}
return a+b-c+d
};
var argument2 = 1.2768489157712438e+308;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = [607,595]
return a*b*c-d
};
var argument4 = ["wZ0"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = "!f"
argument7[5] = null
argument7[126] = ["$","A","5","2@","z","<7S@","zp||H"]
return a-b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 0
argument7[3.8120440085202614e+307] = 9.741299986914906e+307
base_3[0][3] = {"O":82,"":"("}
return a*b/c+d
};
var argument7 = 595;
var argument8 = [126,242,157,25];
var base_0 = [460,595,242,969,783,5e-324,82,49,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,595,242,969,783,5e-324,82,49,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,595,242,969,783,5e-324,82,49,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,595,242,969,783,5e-324,82,49,157]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test620.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)