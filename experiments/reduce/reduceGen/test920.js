





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = true
argument2[2] = ""
return a*b+c-d
};
var argument2 = [893];
var argument3 = 1.4659505654284593e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"59":100,"403":5e-324,"460":59,"823":"","":"M","8.656711906204986e+307":"","VR":"^","93=$":1.7340857202834968e+308,"p":3.7649362921004167e+307,"1.6454014368530939e+307":""}
argument6 = {"0":1.212693729348311e+308,"":"","7.957399608631381e+307":714}
return a+b/c+d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.1869172855352885e+307] = 59
argument7[1.612812046173122e+308] = [595,59,-100,460,49,213,100,-1,213,126]
return a*b*c*d
};
var argument7 = r_2;
var argument8 = [783,49,783,213,25,157,59];
var argument9 = r_2;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['18{'] = ""
return a+b+c/d
};
var base_0 = [59,122,126,100,49,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,122,126,100,49,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,122,126,100,49,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,122,126,100,49,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)