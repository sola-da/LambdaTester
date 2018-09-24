





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"242":25,"":783,"}B":1.174255148395303e+308,"1.4169230517505984e+308":1.6838837286614205e+308,"-100":"O"}
base_0 = [126,-100,-1]
return a*b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = {"100":"L","607":"%I$$$O","823":"","893":"","3.4654950258248837e+307":"","2.587602547960195e+307":"","":"","zB":969}
base_1[2] = null
argument5 = [49,157,969,595,403,783,1.7976931348623157e+308]
return a/b*c
};
var argument5 = {};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
base_2[2][7] = null
base_2[5] = {"4":"NG","783":7.608219195223742e+307,"6.231886838535118e+306":"@","":""}
return a-b+c
};
var argument8 = ["g(","i","u","P","`UcY","3"];
var argument9 = "D";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = true
base_3[8] = "N"
argument12[122] = [823,"2%Zn+@","Q"]
return a/b+c
};
var base_0 = [59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test257.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)