





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = ""
argument3[1.359136872727139e+308] = 403
base_0[0] = null
return a*b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[82] = false
return a+b*c+d
};
var argument6 = r_0;
var argument7 = {"100":893,"":"","9.85750721466957e+307":1.0384762075155107e+307,"-100":""};
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"157":1.2980470200434285e+308,"213":"","705":-100,"1.0676836774612332e+308":"","Ci":5e-324,"x ESQ,":"0lTd)MG!","":"'","S-":6.008151971349608e+307,"V":1.4019332809821765e+308,"}":""}
return a*b*c*d
};
var argument10 = r_2;
var argument11 = true;
var argument12 = r_0;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ["pCB",","]
return a-b/c-d
};
var base_0 = [100,627,607,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,607,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,607,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,627,607,969]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)