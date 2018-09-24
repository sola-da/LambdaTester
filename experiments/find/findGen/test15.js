





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = ["Hv","+[","8h}","=","W","(","E","5","`",",!)zq"]
argument3[460] = {"1.5506627560978461e+308":")","YP":"","1.2024557613506655e+308":969,"":627,"8.162547364380523e+307":403,"7.711553861403945e+307":"c","1.3348683679650602e+308":1.6707445423279274e+308}
return a-b-c
};
var argument2 = [126,25,">B"];
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = null
return a*b/c
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = false
argument9[460] = ""
return a*b-c
};
var argument8 = r_0;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[0] = 1.1788394904278007e+307
argument12[0] = 82
base_3[7] = "Ib"
return a-b/c
};
var base_0 = [49,893,1.7976931348623157e+308,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,1.7976931348623157e+308,0]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,1.7976931348623157e+308,0]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,1.7976931348623157e+308,0]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test15.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)