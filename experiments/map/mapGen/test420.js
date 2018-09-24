





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = true
return a-b/c
};
var argument2 = r_0;
var argument3 = [59,49,100,126,100];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"242":"","1.948549855209286e+307":2.994748898277165e+307,"":"","1.3459144280551128e+308":"w>"}
base_1[1] = {"122":2.847961530912833e+307,"#":"f","1.1166557477257628e+308":"%uS","h":"","":"B","1.3147398988955642e+308":"","{":"]","q?!":100}
return a/b/c
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1]['d'] = {"":-100,"[":6.625903507930848e+307,"Y9fh":"t","Zu":""}
argument7 = 1.1288300909561596e+308
base_2[0] = [460,126,823]
return a-b+c
};
var argument8 = true;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7] = 126
argument11[618] = null
return a*b/c
};
var argument11 = null;
var argument12 = r_0;
var base_0 = ["D=-q","^",213,59,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D=-q","^",213,59,595]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)