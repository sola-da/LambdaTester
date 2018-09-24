





var callbackArguments = [];
var argument1 = 100;
var argument2 = false;
var argument3 = {"|{":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = null
argument3[1.359136872727139e+308] = ""
argument2[7] = false
return a-b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = 607
argument7[1.359136872727139e+308] = ",s"
return a-b/c*d
};
var argument6 = null;
var argument7 = r_0;
var argument8 = null;
var argument9 = r_0;
var argument10 = {"655":"J<","823":242,"":"Z","1.7976931348623157e+308":595,"1.3555563225014514e+308":1.0659658688610269e+308,"1.757314648200808e+308":"p","(":1.9332211020037367e+307,"6.540727631092917e+307":969,"5.096386750268163e+307":-100,"1.6256675926668614e+308":""};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [5e-324,893,1.7976931348623157e+308,843,242,0,5e-324,25,655,100]
argument10[595] = {"213":-100,"893":"","":"",";C":""}
return a/b/c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[213] = [843]
base_3 = ""
argument12[126] = false
return a+b*c*d
};
var argument13 = false;
var base_0 = ["a7<M",")","y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a7<M",")","y"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a7<M",")","y"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a7<M",")","y"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test739.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)