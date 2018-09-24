





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = 100
return a/b+c
};
var argument2 = null;
var argument3 = {"|{":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = false
return a-b*c
};
var argument5 = ["gq","2","LL","+e","u"];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = false
argument8['f'] = 1.5286909991521077e+308
return a+b/c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = {"655":"J<","":1.5670182081867659e+308,"1.757314648200808e+308":"p","(":1.9332211020037367e+307,"1.7976931348623157e+308":595,"6.540727631092917e+307":969}
argument11[0] = [823,823,607,59]
base_3[0][3] = {"":6.323975256630701e+306}
return a/b/c
};
var argument10 = false;
var argument11 = {"1.7071986534150335e+308":893,"":"","_5":"","+Y":"","-100":""};
var base_0 = [";","2+","7<M",")"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","2+","7<M",")"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","2+","7<M",")"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","2+","7<M",")"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test870.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)