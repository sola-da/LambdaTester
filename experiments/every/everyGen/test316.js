





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"0":25,"25":"","618":1.7209663855777379e+308,"655":59,"":783,":%w":"","p":"","^mH":"k:"}
argument2[3] = true
return a+b/c
};
var argument2 = {"59":3.4082116683154837e+307,"122":"","157":"E&VU","627":2.5248873095117227e+307,"ib":"n)","":8.990881002069011e+307,"1.21047679913154e+308":1.3459434685544234e+308,"3.600774611621207e+307":"0 ","4.551635105147872e+307":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {}
base_1[0][6] = {"655":3.7809484213745324e+306,"M-":843,"1|":"SI"}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = [595,"M",618,82,"w"]
return a/b*c
};
var argument5 = [618,460,460];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = true
return a+b*c
};
var base_0 = [714,25,823,893,460,595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,25,823,893,460,595]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,25,823,893,460,595]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,25,823,893,460,595]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)