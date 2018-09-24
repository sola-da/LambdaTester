





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
return a*b-c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"5":"6","59":"","627":595,"Wd":"-","":100,"5.504024318574105e+307":""}
argument3['K'] = null
argument3[1.738403780925446e+308] = {"705":"","":"",";":2.5350900260947165e+307,"$@":"","S'z":213,"1.5838780771944055e+308":"(","|Jv":8.639972528763326e+307,"1.4047632419400668e+308":1.7503299076721953e+308,":":""}
return a*b+c/d
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.738403780925446e+308] = "!"
return a-b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 25
argument8[783] = true
return a/b/c*d
};
var argument7 = {"403":"","`":126};
var base_0 = [460,-100,714,5e-324,969,714,627,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-100,714,5e-324,969,714,627,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-100,714,5e-324,969,714,627,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,-100,714,5e-324,969,714,627,-100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)