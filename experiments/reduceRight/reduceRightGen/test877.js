





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = false
argument3[6] = 7.664413120043286e+307
return a*b-c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"705":""}
argument4[82] = {"242":"","595":"","":1.082866416940405e+308,"Q":213,"1.2498188358443805e+308":"7","w":843,"a":"r"}
argument4['v'] = [823,"j"]
return a-b*c-d
};
var argument4 = 3.561097646099801e+307;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [655,627,823,595]
return a+b-c/d
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"122":"m","157":" ","783":"","":"VT","1.3304631749594585e+307":100,"q":"g","3.492891291021255e+307":9.134642111696283e+307,"6.762878997108953e+307":843,"1.6058300807141761e+308":"","4.578292124222585e+307":"E"}
base_3[2][1] = {"25":100,"460":1.6142469959954072e+308,"893":"XT","3.5780820152844333e+307":"","":8.755269394456208e+307,"%u":4.586962579122981e+307,"+":"E","5.305435631271276e+307":969,"4.779867290197255e+307":1.5841399680809252e+308}
base_3[1][2] = [5e-324,0,82,59,403]
return a+b-c*d
};
var base_0 = [783,122,-100,-1,242,5e-324,618,403,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122,-100,-1,242,5e-324,618,403,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122,-100,-1,242,5e-324,618,403,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122,-100,-1,242,5e-324,618,403,157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)