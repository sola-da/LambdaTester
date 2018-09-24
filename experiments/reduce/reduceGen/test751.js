





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = 705
return a-b-c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = "L";
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
argument3[2.1280896016417002e+307] = {"1.7829438135679705e+308":"tgqy7}'","":"","0*":5.729116729663821e+307,"5.928618757810654e+307":"OS","1.1115893330776428e+308":"","1.6634588394005558e+308":-1,"1.157148852733071e+308":969,"1.0932394637875115e+307":1.5332078896656112e+308,"1.5589085693708857e+308":6.004903091608741e+307}
argument4[213] = false
return a*b-c-d
};
var argument7 = [460,59,823];
var argument8 = r_0;
var argument9 = "";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.1277822633002616e+308] = ["xN"]
argument7[1] = null
argument8[0] = [-1,783,100]
return a*b*c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[655] = ""
base_3[0][3] = 82
return a*b-c*d
};
var base_0 = [";7I","6","6","Kh"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";7I","6","6","Kh"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";7I","6","6","Kh"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";7I","6","6","Kh"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test751.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)