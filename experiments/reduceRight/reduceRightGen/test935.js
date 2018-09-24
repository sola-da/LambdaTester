





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['y'] = {"0":7.220941261933386e+307,"82":1.7441219873342245e+308,"714":"","":213,"W":4.723604034998401e+307,"1.3648274350916825e+307":1.793665583071433e+308,"1.7976931348623157e+308":213,"=Yby0s":714}
argument2['T'] = "F"
base_0[4][1.7976931348623157e+308] = {"0":2.189447710339186e+307,"893":4.1344783942394097e+307,"VL":7.280407461847225e+307,"6.72248050990141e+307":"Pp","1.3062595146323715e+308":714,"":403,";":0,"1.6718606159608172e+308":100}
return a-b/c*d
};
var argument2 = ["[k"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['^N'] = ""
argument6[5] = null
return a*b/c/d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = [618,1.7976931348623157e+308,595,595,59,100,607]
argument7[3.8120440085202614e+307] = ""
base_2[2][1] = ""
return a*b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.8120440085202614e+307] = ["zmRf","7","%O"]
argument8[-1] = false
return a/b/c+d
};
var base_0 = ["I","I","oJc","L|J)W","w","}","-"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","I","oJc","L|J)W","w","}","-"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","I","oJc","L|J)W","w","}","-"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","I","oJc","L|J)W","w","}","-"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)