





var callbackArguments = [];
var argument1 = 1.6705498558517827e+308;
var argument2 = "+V";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = "b"
argument2[1] = "z"
return a+b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.016119953719609e+308
argument6[3] = ""
return a*b*c+d
};
var argument6 = "Q0";
var argument7 = "";
var argument8 = [893,893];
var argument9 = 242;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = null
return a*b*c/d
};
var argument11 = r_3;
var argument12 = true;
var argument13 = r_3;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = "X"
base_3['length'] = {"122":8.823294255211435e+306,"627":49,"714":"Hg","":""}
argument12[0] = {"-1":1.7976931348623157e+308}
return a+b-c+d
};
var base_0 = ["n","l@:","o","G","0","fhx`n?","M=+e{m",")q;"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","l@:","o","G","0","fhx`n?","M=+e{m",")q;"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","l@:","o","G","0","fhx`n?","M=+e{m",")q;"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","l@:","o","G","0","fhx`n?","M=+e{m",")q;"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)