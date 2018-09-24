





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"49":"_j8","705":1.2919322198366426e+308,"G":8.519451788413925e+307,"I":"","":"7^H"}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = 25
argument3[-1] = {"0":1.7650700449234161e+308,"607":"v}jgS","823":"}e_2","969":2.40696191563132e+307,"":"","1.178911065988573e+308":"","V":"q}N","-100":"","5.729895766224845e+307":7.926093517391783e+307}
base_1[3][7] = "8"
return a*b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 1.5342259253864477e+308
return a/b/c
};
var argument5 = {"969":618,"Z":"","N":1.99341259649075e+307,"1.7976931348623157e+308":823,"J":"8","1.0720735441897305e+308":")","":"","J[":1.1256607326122407e+308,"4.560277336943018e+307":4.645665012422871e+306};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[783] = 1.5246475441464808e+308
base_3[8] = null
return a+b-c
};
var base_0 = ["P","8d*","{<JV","!","]6@R"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","8d*","{<JV","!","]6@R"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","8d*","{<JV","!","]6@R"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","8d*","{<JV","!","]6@R"]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)