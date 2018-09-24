





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
base_0[5] = {"(":"","":618,"1.5399338641321812e+308":""}
argument1[1] = "F"
return a+b+c-d
};
var argument2 = false;
var argument3 = {"823":1.7976931348623157e+308,"1.715428662376767e+308":607,"8(":-1,"1.448283032768923e+307":"","]*1'a":1.671259945975452e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 122
argument5[4] = 0
argument6[0] = true
return a-b*c-d
};
var argument5 = [1.7976931348623157e+308,969,655,969,403,242,100,607];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
argument7['w'] = "D,"
return a-b+c*d
};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = ["CJOyc*h","E","i",122,0,59]
argument10['{S'] = "]"
return a/b+c+d
};
var argument10 = null;
var base_0 = ["E",242,"W1",403,"Q"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",242,"W1",403,"Q"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",242,"W1",403,"Q"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E",242,"W1",403,"Q"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)