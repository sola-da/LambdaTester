





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['1SHF1'] = null
argument2 = false
argument2[4] = "muuL!"
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5.062647675476955e+307] = null
base_1[0][0] = null
argument4[8] = ["Wua","f8","n","@T["]
return a+b+c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = 1.598538971279096e+308
argument6[1.0446313380579697e+308] = ["Dh,<<<",":g:h","r+A","=6Q_i","v","Y","S","_","{"]
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['7q('] = [-100,157,25,595]
argument7['ns'] = null
argument7[-1] = 1.7216265866661774e+308
return a-b*c
};
var argument7 = 122;
var base_0 = [122,714,242,607,126,59,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,714,242,607,126,59,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,714,242,607,126,59,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,714,242,607,126,59,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)