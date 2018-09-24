





var callbackArguments = [];
var argument1 = "";
var argument2 = -100;
var argument3 = {"0":242,"122":"","607":6.338304978019544e+307,"(;ZoD":"d","":"","a":5e-324,"vE":213,"yR8":1.4856955519756127e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = true
base_0[0] = ""
return a-b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = null
argument7[1.3938918493123786e+308] = 7.760112430206923e+307
return a*b-c-d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ["zRQ","A3s","gZ","P,Oq","_","n","R"]
argument8[627][126] = 82
return a+b-c-d
};
var argument8 = null;
var argument9 = false;
var argument10 = false;
var argument11 = r_0;
var argument12 = "Q";
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
argument12['*c'] = [618,122]
argument10[126] = false
return a/b/c*d
};
var base_0 = [49,"Lb",242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"Lb",242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"Lb",242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"Lb",242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)