





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = {"3":1.6554578508988482e+308,"5e-324":595,"j":157}
return a-b-c-d
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {"49":618,"1.4711733941995158e+308":":"}
argument5[8.108492555774111e+307] = {"843":1.7043907228688217e+305,"":4.859612864372391e+306,"6.452074605254766e+307":"","$":"-f*"}
argument5['L'] = 1.7976931348623157e+308
return a+b*c+d
};
var argument5 = {"595":"","627":4.446771312481538e+307,"1.440111349616383e+308":"","":823,"3.1542537003817227e+307":49,":E":"","0<":1.7976931348623157e+308};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = "`"
base_2[1][2] = {"59":"","403":627,"893":1.1085932154020101e+307,"P":"7","6.634183071488961e+307":"","1.3907065136258384e+308":"","I":"0LMb","6.181484001731327e+307":1.1788490186428198e+308,"":1.06702053869618e+308,"1.6031014553120698e+308":""}
base_2[2][2] = false
return a+b/c*d
};
var argument8 = {"2.1214847097329036e+306":1.2064556682088447e+308,"":"","#sQ":122,")?e":"4"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c-d
};
var base_0 = [-1,59,"Wy",82,0,"{","Nr"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,59,"Wy",82,0,"{","Nr"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,59,"Wy",82,0,"{","Nr"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,59,"Wy",82,0,"{","Nr"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)