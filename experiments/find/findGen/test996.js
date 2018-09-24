





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.0885014435567013e+307] = ""
argument3['^h'] = ""
return a+b/c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = ","
argument6[3] = ""
argument5['AwD'] = {"9":"1","783":"W","7.140633291246696e+307":4.3123238354455394e+307,"1.1338302620488947e+308":"5o","":"","1.4082797562394701e+308":1.0947853609881186e+308,"iv":595,"4.0249813613673833e+306":"B","8|>r":823}
return a/b/c
};
var argument5 = null;
var argument6 = 1.5345543173457847e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = 9.097324469999389e+307
base_2[6] = 59
return a+b*c
};
var argument8 = {"82":"","823":"","":"","5}[":"yzo"};
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = true
base_3[1][6] = null
return a-b-c
};
var argument11 = false;
var argument12 = {"H$dx":403,"":""};
var base_0 = ["la","pYxli","C","g","WRp","3n","}n=n"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["la","pYxli","C","g","WRp","3n","}n=n"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["la","pYxli","C","g","WRp","3n","}n=n"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["la","pYxli","C","g","WRp","3n","}n=n"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findGen/test996.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)