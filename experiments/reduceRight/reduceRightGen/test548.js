





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = "f"
base_0[0][0] = ["{D!`1CL",25,893,"i",242]
return a/b+c-d
};
var argument2 = "gvx59[";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = [783,49,783,403,595,893,618,213,823]
base_1[1][2] = ["a","C","mks!kYj"]
base_1[4][1.7976931348623157e+308] = null
return a-b-c+d
};
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"2.34925722874895e+307":8.387984397929389e+307}
argument6['w'] = "wI"
return a*b*c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = ["W","J",59,595,"$h-",";","W`_6:"]
argument7[3.8120440085202614e+307] = "o r"
argument7['F2nCX>6'] = {"126":"q","":"","6.506929612833831e+307":",","1.4116744704696113e+308":213,")":""}
return a-b*c/d
};
var base_0 = ["h{x",843]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h{x",843]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h{x",843]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h{x",843]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)