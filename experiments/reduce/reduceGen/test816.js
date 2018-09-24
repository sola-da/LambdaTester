





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = ""
base_0 = false
return a-b*c/d
};
var argument2 = false;
var argument3 = false;
var argument4 = null;
var argument5 = 893;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = [82,122,1.7976931348623157e+308,49]
argument3[0] = 618
argument4[-1] = {"122":5.037941848472225e+307,"655":4.098193510985923e+307,"":"",">{c":"R","1.6294027380424334e+308":607,"4.088411883126846e+307":823,"`W":"","1.5641755223467808e+308":"","1.0296043311488005e+308":"U"}
return a+b*c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.1280896016417002e+307] = ["m"]
base_2[0] = [823,714,100]
argument8[';N'] = 6.720595181713695e+307
return a*b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = "c"
argument10[595] = false
return a+b+c-d
};
var base_0 = ["Pe","m","Dyz","o7","I","F<","Vy"," ","c"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Pe","m","Dyz","o7","I","F<","Vy"," ","c"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Pe","m","Dyz","o7","I","F<","Vy"," ","c"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Pe","m","Dyz","o7","I","F<","Vy"," ","c"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test816.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)