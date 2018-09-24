





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2] = ["P@y","njG","@j","m?W","W@"]
return a*b-c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 122
return a/b+c-d
};
var argument4 = 6.231284963466475e+307;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['K'] = {"7":"","705":"","nS":6.794377088246424e+307,"":843,"G":213,"m=r_":460,"$":82,"1.5955126732838482e+307":""}
return a+b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][1.7976931348623157e+308] = null
argument8[1] = {"25":5.877434930285495e+307,"242":4.512087368777301e+307,"607":">","6.919560247588946e+307":893,"3.53032971021679e+307":0,"":618,"L":2.497385861660227e+307,"1.2368015593403405e+308":"k]2Y","1.1554427590343538e+308":"BPu<"}
return a*b/c/d
};
var argument7 = true;
var base_0 = ["VWX","@W^","w","`$",">#I"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["VWX","@W^","w","`$",">#I"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["VWX","@W^","w","`$",">#I"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["VWX","@W^","w","`$",">#I"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)