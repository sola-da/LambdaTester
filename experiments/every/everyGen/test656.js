





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = true
base_0[6] = [1.7976931348623157e+308,82,1.7976931348623157e+308,0,627,823,893,595,157]
argument2[8] = ""
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
return a*b*c
};
var argument3 = {"a":843,"e$":"#n)","":9.716970487322123e+307,"1.7976931348623157e+308":1.3484985230485392e+308,"B":49,"1.5568069340002274e+308":"","g":"","-":" G"};
var argument4 = [403,"O",157,"u%3","O4[","I"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = [595,122,823,126,-100,714,25,157,655]
argument6[122] = ""
argument6[1] = {"5":705,"100":"?#","618":8.058787551089137e+307,"I":7.681956152105867e+307,"8.33302299669938e+307":705,"":"Krh"}
return a+b/c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 100
argument8[1] = true
argument8[1.6706143966770798e+306] = ""
return a*b-c
};
var argument8 = null;
var argument9 = {"157":-1,"607":783,"QR":1.2740732633592906e+308,"1.5095776646904534e+307":705,"-100":9.051278051201677e+307,"F]":"d","4.5542223389047776e+306":")","6.169807422266037e+307":969,"o":3.822025778690075e+307};
var base_0 = ["K","xd#*",122,"V","g{"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","xd#*",122,"V","g{"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","xd#*",122,"V","g{"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","xd#*",122,"V","g{"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)