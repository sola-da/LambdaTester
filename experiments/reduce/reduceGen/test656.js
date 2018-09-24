





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627][126] = null
argument3[2] = false
argument2[';N'] = 6.633109716462702e+307
return a*b-c+d
};
var argument2 = "Fg$C[";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"122":1.3869666958806344e+308,"1.4002214480833253e+307":1.5376433908254533e+308,"5.03202587957634e+307":705,"f[":"O","%x":1.3728652255485612e+308,"":-100}
return a-b/c+d
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['HMm'] = [595,893,"4?","P",49,"}"]
argument7[4] = ""
return a+b+c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[627][126] = [49]
argument9['*c'] = 460
argument8[5] = 1.6745404229583213e+307
return a+b/c*d
};
var base_0 = ["IS","hY","@",242,"*sR","S","<",618,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["IS","hY","@",242,"*sR","S","<",618,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["IS","hY","@",242,"*sR","S","<",618,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["IS","hY","@",242,"*sR","S","<",618,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)