





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0[1][3] = null
return a+b-c
};
var argument2 = {"969":82,"":">am","1.6173605953630116e+308":460,"j":25,")c":"mj]"};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = true
return a*b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 25
return a-b/c
};
var argument7 = r_1;
var argument8 = {"6":"","c[chas":"","UEM?S":1.3003492461436003e+307,"4.414534944079213e+307":"p","":"0o","8.465736262088204e+306":"","de":"}","I":"p#","5.699902728417048e+307":"","Dmt":1.6304923727224465e+308};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = null
base_3[1][0] = 823
base_3[3] = {"59":"","595":"","969":1.5055689715042052e+308,"":0,"Ld":4.912769922556103e+307,"2.2122544918536986e+307":"","-qjl":1.7825708245709928e+307,"6.109922509922479e+307":157}
return a-b-c
};
var argument10 = 5.128447522908678e+307;
var argument11 = false;
var base_0 = [783,969,655,25,714,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,655,25,714,655]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,969,655,25,714,655]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,969,655,25,714,655]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)