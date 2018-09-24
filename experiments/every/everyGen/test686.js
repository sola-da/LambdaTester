





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ""
return a-b*c
};
var argument2 = {"157":"","783":0,"1.6387309732655129e+308":1.0334437466942613e+308,"":705,"9.553967314964856e+307":-100,"4.0176776835119257e+307":8.643476709719733e+307,"1.2469857714477715e+308":"yS,","1.0495403030958161e+308":"o","1.775206595900278e+308":"<","1.7920735092160647e+308":"[=_"};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ["LAqIfQz","+"]
return a*b+c
};
var argument5 = {"4.255294604624472e+307":-100,"1.5690116573747888e+308":7.499105561396426e+307,"":"942O]erm"};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = 1.518653309817878e+308
base_2[0][6] = {"843":"*"}
return a-b+c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][5] = 1.7976931348623157e+308
argument10[4.960033715165713e+307] = 8.544899600130169e+307
argument9[2] = {"{":"","":595,"7.771442629080406e+307":"","0b)":")|d","-100":""}
return a*b-c
};
var argument10 = "g_";
var argument11 = "`?";
var base_0 = [607,893,595,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,595,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,595,893]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,595,893]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test686.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)