





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 1.302678106311369e+308
argument2[1.7847438319683965e+308] = {"1.1779033431187572e+308":1.5601523673764655e+308}
return a+b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1679954109349114e+308] = ""
argument5[6] = 2.2393207685091856e+307
return a-b/c
};
var argument5 = "";
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = null
argument7[0] = false
argument9[2] = [823,-100,627,460,100,627]
return a/b-c
};
var argument8 = [126,"^>","m","[",-100,"z"];
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5.262931091360336e+307] = "I"
return a*b+c
};
var argument11 = [59,823,607,242,893,403,714,1.7976931348623157e+308];
var base_0 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&I+","o","N","XH","#","-","f",",","r7"]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)