





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"":9.237442125866948e+307,"n%:5`":4.644023027581542e+307}
argument2[1.6798476101238045e+308] = 1.116453827739071e+308
return a+b/c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[705] = {"82":"v[","595":"L","618":"","893":627,"#":"","q":1.311163076234906e+308,"":"","W":"0b","3.767067483175178e+306":5.792504576920022e+307,"1.4311415785523904e+308":""}
base_1[1] = false
return a-b-c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = [-100,59,"p",618,"73",893,0]
return a-b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 969
return a/b-c
};
var argument9 = r_2;
var argument10 = {"5.047255853115668e+307":"","":5.358030077084155e+307,"1.4526693219600024e+308":714,"l_":""};
var base_0 = [5e-324,"{@zoFa",126,893,607,"5",893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"{@zoFa",126,893,607,"5",893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"{@zoFa",126,893,607,"5",893]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"{@zoFa",126,893,607,"5",893]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test190.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)