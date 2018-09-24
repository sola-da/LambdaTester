





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = null
argument2[403] = false
return a-b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ["K","<5","5","q"]
return a-b+c+d
};
var argument3 = 618;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
base_2[1] = null
base_2[7] = true
return a/b/c-d
};
var argument5 = r_2;
var argument6 = {"-100":",)r","":9.783580558379264e+307,"1C":"","1.481798058557502e+308":"E)","K[":""};
var argument7 = false;
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = [5e-324,82,157,595,714,242,403,0,5e-324,-100]
argument9 = "IN7"
argument8[7] = true
return a+b/c+d
};
var base_0 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)