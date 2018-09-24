





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ["J","Ed","8R,","!"]
return a+b+c
};
var argument2 = true;
var argument3 = 1.5988029578824587e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument5[5] = "'3)"
return a/b/c
};
var argument5 = {"126":"","9.610624921215409e+306":"d{&","1.0486508579470616e+308":4.189481383833853e+307,"":"","2.322253378668985e+307":"Ws"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = false
base_2[1] = [-100,893,59,126,969]
return a*b+c
};
var argument7 = {"Uc0d":3.7461300985629674e+307,"":-1,"C":"Tt","i":""};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = {"25":7.086368104734425e+307,"213":"","655":9.175922697241083e+307,"":"","3.152833696685252e+307":""}
base_3[5] = null
return a/b+c
};
var argument10 = 157;
var base_0 = [618,-100,460,122,25,607,242,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,-100,460,122,25,607,242,969]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,-100,460,122,25,607,242,969]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test57.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)