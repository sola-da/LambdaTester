





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = {"618":7.544666785682189e+307,"714":"","-100":"a","":1.5625588633944236e+308,"2.5442239775683477e+307":25}
base_0[0][4] = 1.7976931348623157e+308
argument3[5] = ""
return a-b/c/d
};
var argument5 = r_0;
var argument6 = 1.6127717352619562e+308;
var argument7 = 1.7014549812223287e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = false
return a+b/c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
argument11[403] = true
argument10[82] = [969,59,893,607]
return a/b/c/d
};
var argument10 = {"714":"","":"","x":"","1.7976931348623157e+308":460};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[25] = "j"
base_3[8] = 595
return a-b-c+d
};
var argument12 = r_0;
var base_0 = ["QZ,","i",655,"v",100,25,157,"0}f",403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QZ,","i",655,"v",100,25,157,"0}f",403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QZ,","i",655,"v",100,25,157,"0}f",403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QZ,","i",655,"v",100,25,157,"0}f",403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)