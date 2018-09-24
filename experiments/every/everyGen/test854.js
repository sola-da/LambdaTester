





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.9097830510613482e+307] = ""
argument1 = true
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = {"843":5.133494612800139e+307,"":"F","-_O":"","1.644857930099693e+308":"","1.5525531499056267e+308":"_","1.48545253295187e+308":1.7032633658123128e+308,"s":969,"8.64403159944538e+307":213}
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.268696794505825e+308] = [627,969,"N",969,403,"8","P","U"]
argument4[783] = 1.1267566583222848e+308
return a-b/c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"595":"","8*":"","":893,"1.7140242923036352e+308":""}
base_3[9] = true
return a*b+c
};
var base_0 = [893,"hn)","sP","l",783,",","k","EznS"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"hn)","sP","l",783,",","k","EznS"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"hn)","sP","l",783,",","k","EznS"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"hn)","sP","l",783,",","k","EznS"]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test854.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)