





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = {"655":1.2230926590229866e+308,"714":49,"1.2453061267060852e+308":"","X":"Y","H$aa":8.828488414297672e+307,"9.630819121815675e+307":""}
argument2[8.575765443877852e+307] = {"122":2.947897890882363e+307,"126":"d)","783":3.8005010088750593e+307,"893":213,"":5.524089871368597e+307,"2.908606200033987e+307":"",",fK":"","9.7915966619577e+307":"F","4.559827007288413e+307":-1}
return a/b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2] = "z"
base_1[8] = 242
return a+b-c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = false
base_2[7] = {"100":3.514503021441521e+307,"126":"","460":"","1.565611376331922e+308":9.92791065221533e+307,"3.079078298089972e+307":2.464557652272573e+307,"":618,"1.3839968927259908e+308":0,"1.2979244990295718e+308":"","CMN":""}
return a*b-c*d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument6[25] = [157,-100,-100,714]
return a*b*c/d
};
var base_0 = [0,655,969,783]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,969,783]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,969,783]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,969,783]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test362.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)