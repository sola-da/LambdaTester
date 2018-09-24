





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = {"655":893,"":2.275399524708277e+307,"(U":1.6184134681917744e+308,"K":"","v":969,"NJ":403,"1.935513803841333e+306":"1","8.336251764424222e+307":"f","Gl":"="};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['l&'] = 1.1816885991147513e+308
base_0[2] = ["?"]
base_0[8] = {"893":1.2521821190945378e+308,"969":"","1.3106684842872153e+308":126,"C":655,"":"t","1.7976931348623157e+308":1.3946362611489543e+308,"7.336739301270062e+307":"","=2":"]","E":2.596222663126175e+307,"+Fn":1.744500138071284e+308}
return a+b+c+d
};
var argument5 = ["@91","(LL]","p","e","|","5a","-J","L4","X"];
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = {"893":"","1.4012000346928827e+307":4.1741012671374987e+307,"":655,"1.3591430140115525e+307":126,"`C":"_IGE&","0d":"","1.354690968572319e+308":1.7845380140874617e+308,"4.449459818794202e+307":"","1.5522006430219224e+308":""}
base_1[4] = {"1.0595659419577223e+308":"","E%O0N":""}
return a+b-c*d
};
var argument9 = r_2;
var argument10 = false;
var argument11 = 82;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = ""
return a-b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.171692140852735e+308] = null
return a/b/c+d
};
var argument14 = {"25":1.4817825977691858e+308,"49":"","460":969,"3y2":"","1.7366901763223109e+308":"","4.900481007459788e+307":655,"":"o","1.6041247922984802e+308":"6","3.829463413615588e+307":1.0999180373156376e+308};
var argument15 = "uZ";
var base_0 = ["OA","$`","A"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["OA","$`","A"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["OA","$`","A"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["OA","$`","A"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)