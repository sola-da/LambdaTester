





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = true
argument3[7.889879335222838e+307] = ""
argument3[5] = 1.7652301380673718e+308
return a*b+c-d
};
var argument5 = null;
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = true
return a*b/c-d
};
var argument9 = r_0;
var argument10 = {"607":"m ","5.26718398733194e+307":-100,"1.2685949869554404e+308":"",")U":"","-1":"","9.080884272002657e+307":714,"l?Ax":6.988457462177e+306,"6.59815033169415e+307":"L"};
var argument11 = {"595":403,"607":403,"627":59,"":100,"i^'":":5"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 7.218940432327284e+307
return a-b-c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = false
argument14[7.463432409233234e+307] = 213
argument13[1] = 1.2647996392372164e+308
return a-b/c/d
};
var argument14 = r_0;
var base_0 = ["(","r<"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","r<"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","r<"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","r<"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test819.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)