





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][3] = false
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[607] = ["2MS|6@Od","ri}c","7 ","f","C","i"]
base_1[6] = {"126":"p","1.7976931348623157e+308":1.7976931348623157e+308,"U":1.0850275497292546e+308,"s":1.0067536043218685e+306,"6.003058328770045e+307":"u"}
return a-b/c
};
var argument3 = 893;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
base_2[3][3] = [823,126,783,"N",59,655]
argument6[3] = null
return a-b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = [59,"Pus","Le",843,-100]
base_3[3][2][6] = false
return a/b-c
};
var base_0 = ["2n","5","+B","Z","P","^4f=$:","YK86F^x","@","mDI"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2n","5","+B","Z","P","^4f=$:","YK86F^x","@","mDI"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2n","5","+B","Z","P","^4f=$:","YK86F^x","@","mDI"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2n","5","+B","Z","P","^4f=$:","YK86F^x","@","mDI"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)