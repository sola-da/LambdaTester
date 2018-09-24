





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = {"&":"g","":""}
return a/b-c
};
var argument2 = {"49":"","8.7514493751355895e+307":100,"7.440208367694523e+307":6.10421811191833e+307,"J":2.869787041691814e+307,"-1":59,"<":"-","{":""};
var argument3 = ["=","e","S","iP","vh"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = [823,59,213]
return a*b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.377960715099946e+307] = [0,25,783,783,0,1.7976931348623157e+308,157,618]
return a-b-c
};
var argument7 = 627;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = {"705":2.3808382940898165e+307,"":"","R#":"E","s":705}
argument9[8.748669805137695e+307] = true
return a/b*c
};
var argument9 = null;
var argument10 = {"714":460,"j(":8.295701733330947e+307,"1.2560438398546209e+308":6.347641165359159e+307,"3.940745630835119e+307":""};
var base_0 = [607,893,5e-324,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,5e-324,59]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,5e-324,59]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893,5e-324,59]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test567.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)