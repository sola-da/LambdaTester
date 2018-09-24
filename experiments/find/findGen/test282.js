





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = 607
return a+b-c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = false
base_1[8][0] = null
base_1[1][2] = [126,5e-324,627,655,100,783]
return a-b*c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = 9.19845790146014e+307
argument8[8.748669805137695e+307] = {"122":"0","157":893,"969":"","":9.857748336443737e+307,"1.487426202526314e+308":969,")":213,"g":""}
base_2[1] = {"0":100,"":"","3.003303996301476e+307":7.995285733345337e+307,"6.734809290859912e+307":627,"Pi":"!(","1.1863434190231078e+308":969,"1.5995292149482602e+308":"n}","Hi":893,"1.0899125902913378e+308":1.232591035348619e+308}
return a+b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = [1.7976931348623157e+308,823,714]
return a-b/c
};
var base_0 = ["o","0>","$E","p$H",",G`xV","&","A","&","+$r"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","0>","$E","p$H",",G`xV","&","A","&","+$r"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","0>","$E","p$H",",G`xV","&","A","&","+$r"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","0>","$E","p$H",",G`xV","&","A","&","+$r"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)