





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
argument2[1.1277822633002616e+308] = {"25":3.024391710992694e+306,"59":1.3737798833791212e+308,"157":"Ug=<Y","5e-324":242,"K,mz":2.7105034217172984e+307,"":"Q","2.0663400047922938e+307":"(V","3.923581699300517e+307":"","9.962450969920737e+307":9.559299470061702e+307}
return a-b*c/d
};
var argument2 = null;
var argument3 = r_1;
var argument4 = "YtV";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
base_1[2][0] = [893,893,655,655]
base_1[7] = ""
return a+b/c*d
};
var argument6 = null;
var argument7 = r_1;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = "_Jd"
base_2[2][0] = ["e^^","O","03]d[","17","jv","Y","mU","K","eJy3","lp"]
base_2 = "9"
return a/b-c/d
};
var argument10 = true;
var argument11 = r_1;
var argument12 = ["j","l",-100,5e-324,843,"R","W=",618,"@(9[q",213];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = ["Omo_",")","a","L"]
argument12[5] = ""
argument11 = 1.360612944335064e+308
return a-b/c-d
};
var base_0 = [893,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)