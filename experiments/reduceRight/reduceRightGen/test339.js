





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = ""
return a/b+c-d
};
var argument3 = {"213":3.2588997921135914e+306,"969":"^","5.723571092952731e+307":"Jv","":":U?","`;F":"","x":8.155794624102127e+307,"P":100,"F2nCX>6":0,"9m2HR":""};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = -100
return a*b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['w'] = {"126":"","618":3.072383445616112e+307,"783":"","Ap":"","":783,"F+":"","-1":"","^|S ":607}
return a+b/c/d
};
var argument7 = "J!T7";
var base_0 = [1.7976931348623157e+308,"i","h","HC^","d",")Q",823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"i","h","HC^","d",")Q",823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"i","h","HC^","d",")Q",823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"i","h","HC^","d",")Q",823]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test339.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)