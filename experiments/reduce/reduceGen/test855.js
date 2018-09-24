





var callbackArguments = [];
var argument1 = false;
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.3938918493123786e+308] = [126,893,25,-1,126,242,595,460,460]
argument3[7.889879335222838e+307] = "H"
base_0[8] = [82]
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = null
argument6[-1] = ["cY","+-@k","|jz","d","K"]
argument7['18{'] = ["L","lz"]
return a-b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = "="
return a+b/c*d
};
var argument7 = false;
var argument8 = 5.040485995876791e+306;
var argument9 = [607,242,122,618,627,783,714,-100];
var argument10 = 8.561326865258854e+307;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = [242,-1,618,-1,893,607,0]
return a/b-c+d
};
var base_0 = [714,783,213,823,460,25,783,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,213,823,460,25,783,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,213,823,460,25,783,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,213,823,460,25,783,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)