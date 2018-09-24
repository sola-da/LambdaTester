





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = "f"
base_0 = [122,655]
base_0['length'] = [843,595,1.7976931348623157e+308,-1,-1]
return a*b+c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 0
argument2 = {}
base_1[4] = true
return a-b/c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = null
base_2[2] = {"242":6.805671506347077e+307,"460":"","783":"L","":"4","1.4805221949558912e+308":"o","5.012887173795741e+307":1.7783794731378768e+308,")":969}
base_2[3] = 7.212485025296391e+307
return a*b*c*d
};
var argument4 = r_1;
var argument5 = false;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ""
base_3[1] = 1.3039920858757724e+308
return a+b*c+d
};
var base_0 = ["=","B","4","s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","B","4","s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","B","4","s"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","B","4","s"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)