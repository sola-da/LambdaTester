





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"25":1.7199590779047816e+308,"6.760932060247693e+307":"","1.740371718760232e+307":"8E"}
argument3[1] = 1.7976931348623157e+308
return a+b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = null
return a-b/c
};
var argument4 = {"49":-1,"403":1.5738684407104424e+307,"q":"a6sG","7.103357751971764e+307":1.6803112820659273e+308,"":1.2335283177592043e+308,"F":100,"eG":618,"f":""};
var argument5 = ["o",460];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = ""
return a+b*c
};
var argument7 = r_0;
var argument8 = {"607":"2","r":1.7485037027357511e+308,"":"","6.030046341826686e+307":714,"chR":1.5611605967908782e+308,"1.414366981660556e+308":""};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = ["O","+my",618,"t*","djv@",":M;"]
return a+b*c
};
var argument10 = r_0;
var base_0 = [627,126,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,126,49]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,126,49]
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
require("fs").writeFileSync("./experiments/map/mapGen/test339.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)