





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = 8.378463964433836e+307
argument2[1.7847438319683965e+308] = {"213":"?","705":"","893":1.7038138424504812e+308,"3.461371051847885e+307":1.7942319721635805e+308,"q":"[","1.7272414034960238e+308":"","":"-> O","1.0358930292267763e+308":403}
argument2[157] = null
return a-b/c
};
var argument2 = ["2","#&b","5+_5","@Y","trLk8"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = {"126":893,"213":"s","595":"","1.482713132125456e+308":8.234014313995765e+307,"iO":"","-?":"z","1.690718760308241e+308":6.629480236196541e+307,"":1.464928042402789e+308}
return a+b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ["mI{",-100,655]
base_2[7] = false
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['c'] = 6.064648226375949e+307
return a/b*c
};
var argument8 = true;
var base_0 = ["D","t","Q","G","w","=","u","cv","aS"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","t","Q","G","w","=","u","cv","aS"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","t","Q","G","w","=","u","cv","aS"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test520.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)