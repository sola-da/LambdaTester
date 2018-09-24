





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['(R'] = "6#6"
base_0[1][3] = "iSo}r@"
return a+b+c-d
};
var argument5 = {"213":893,"":"Q|","1g%":"Pd%","`":"dVac#l","Y":2.6762456090278726e+307};
var argument6 = "0";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1280896016417002e+307] = ["6X`","M","%-a`","$",":uUY","6","UY","2","i","^"]
return a-b*c-d
};
var argument9 = r_1;
var argument10 = r_1;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = ["+hRT","`iu1","x5","ntD*"," <QXM","ua","TB","Gqz","M"]
base_2[6] = false
return a+b-c-d
};
var argument13 = true;
var argument14 = [607,49,213,783,242,655];
var argument15 = r_0;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = null
argument13[9] = ["J","R","1","|","=n[","$CjTh#8"]
return a/b+c/d
};
var base_0 = ["v","W="]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","W="]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","W="]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","W="]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)