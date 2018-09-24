





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = 3.4885711984513326e+307
return a*b+c+d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"607":1.162672938857025e+308,"9.6167907435392e+307":3.3600723624746206e+307}
return a+b-c*d
};
var argument4 = true;
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = {"25":7.744506219211842e+307,"59":5.679694559888734e+307,"":1.1628886723405124e+308,"HE":"","1.144196181726975e+307":25,"5.057170028922231e+307":"","7.003866930906394e+307":100}
argument7[1.738403780925446e+308] = false
return a*b-c+d
};
var argument7 = true;
var argument8 = {"607":705,"7.786522949960296e+307":1.3947812539337836e+308,"M":1.0821041346426643e+308};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.738403780925446e+308] = true
argument10['y'] = false
return a-b-c/d
};
var argument10 = "`Ei";
var base_0 = ["{",122,"P",823,5e-324,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{",122,"P",823,5e-324,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{",122,"P",823,5e-324,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{",122,"P",823,5e-324,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)