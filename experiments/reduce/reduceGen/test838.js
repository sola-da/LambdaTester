





var callbackArguments = [];
var argument1 = false;
var argument2 = "p";
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[595] = 893
return a-b-c-d
};
var argument5 = null;
var argument6 = "D";
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = false
argument7[5] = 157
return a+b+c+d
};
var argument9 = 157;
var argument10 = null;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = false
base_2[0][0] = "B"
argument10 = 607
return a-b/c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = true
base_3[3][1] = null
return a+b*c/d
};
var argument14 = null;
var base_0 = ["t{*h","`",">","7^;f+k","YC$;M","bEV3","7XZ","f{","VG"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t{*h","`",">","7^;f+k","YC$;M","bEV3","7XZ","f{","VG"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t{*h","`",">","7^;f+k","YC$;M","bEV3","7XZ","f{","VG"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t{*h","`",">","7^;f+k","YC$;M","bEV3","7XZ","f{","VG"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test838.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)