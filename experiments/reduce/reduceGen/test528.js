





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = {"82":"^T","100":"","Aw":705,"1.6632472914947273e+308":"=9","X":"","":"(","uj":843,"F[|":4.456192717949081e+307,"O":82}
return a-b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"969":1.349953115158221e+308,")K1JYO":1.055326442876297e+308,"a":2.9993520481412103e+307}
argument4[3] = [":","Ex","&Y",":","2","T"]
return a+b/c+d
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = "0"
return a/b*c/d
};
var argument6 = {"714":1.7959500000966516e+308,"8.627728920272564e+306":"","":213,"e<)":969,"9.843237426656786e+307":"Q,","5.840733104108622e+307":"p"};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.889879335222838e+307] = false
argument8[126] = {"25":7.323439055083916e+307,"3.4829812259383204e+307":3.7803050744477057e+307,"3.691244013469495e+307":"V","":126}
return a-b-c*d
};
var base_0 = [607,59,893,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,59,893,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,59,893,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,59,893,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test528.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)