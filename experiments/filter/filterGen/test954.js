





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"595":"","1.4913209683446364e+308":1.6202442892443399e+308,"H":"","":1.0852710181541324e+308,"A":"&WYS4","9.927956148233684e+307":1.7596871007859898e+308}
return a-b*c
};
var argument2 = [213,655,823,607,627,213,655,618,893];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['wIs'] = 893
return a/b+c
};
var argument5 = {"595":126,"893":"8","5.698544723526437e+307":5e-324,"U":"y","":"","2.0094679955360397e+307":893,"1.7976931348623157e+308":"i","1.2475017373481819e+308":"Qz$","1.7051745136439632e+307":"","9.968956940068206e+307":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[714] = ["b","i+!"]
argument7[7] = ""
argument8[1.7847438319683965e+308] = 8.699275910493958e+307
return a+b-c
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['7q('] = "bs"
return a/b-c
};
var base_0 = ["SQ","i","_",0,893,"+","[","a:"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["SQ","i","_",0,893,"+","[","a:"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["SQ","i","_",0,893,"+","[","a:"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test954.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)