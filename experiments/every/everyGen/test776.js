





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = false
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = {"0":126,"82":"b:e","":1.7976931348623157e+308,"-100":655,"8.712880867832713e+307":"5FmDK","w@":"Vz"}
argument4[0] = [1.7976931348623157e+308,242,714,705,595,893]
return a/b+c
};
var argument3 = {"25":2.7778745738796e+307,"126":"o","l-qs=^Ii<":"LWI%'","1.268696794505825e+308":0,"":"=","-100":"","8.809209773029947e+307":969,"iq":8.46868948253437e+307};
var argument4 = [655,627,823,0,126];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
base_2[1] = null
argument6[1.3599216339661573e+308] = false
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = false
base_3[3] = {"100":"","":126,"5.692340722961603e+307":595,"x":242,"_":1.5925784231146751e+308}
return a/b-c
};
var base_0 = ["<",",W","rSt"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<",",W","rSt"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<",",W","rSt"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<",",W","rSt"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)