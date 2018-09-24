





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = true
argument1[3.377960715099946e+307] = ""
argument2[627] = null
return a*b-c
};
var argument2 = 6.520184469071789e+307;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[126] = 0
argument5[242] = ["{","=",0,"a=","M","!","f7"]
return a/b*c
};
var argument5 = {"":"","1.6477629332740987e+308":"",">{":"uSp","|d":5.535971743355838e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][4] = {"655":"9K*","8.659527845793004e+307":"","vGDD=(8X":"?8","":49,"zq":1.0472178908442534e+308,"@3":3.6353304535546674e+307,"$H{":1.7187686605024354e+308,"3.5830265984738373e+306":"B"}
argument7[0] = {"100":"","1.5851807816255282e+308":"i0>","5.772440650126427e+307":783,"":5.28233942806119e+307,"1.453429114424213e+308":823,"a'":"","1.9349160088418642e+307":-1}
return a-b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = null
return a*b/c
};
var base_0 = [157,49,823,843,618,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,49,823,843,618,25]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,49,823,843,618,25]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,49,823,843,618,25]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)