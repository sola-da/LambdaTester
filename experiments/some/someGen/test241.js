





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
base_0[1][8] = {"82":8.440594691787608e+307,"157":2.8775557088908366e+307,"242":"","893":"","Tg":9.154787549242574e+307,"3.880508136715125e+307":"W4=:","1.7809095364882092e+308":"d"}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
return a+b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ["vb",";","p"]
argument5[1.6798476101238045e+308] = {"100":"X","":"I","4.571770232811845e+307":4.807339303602806e+307,"1.396236434385929e+308":9.65089139028383e+307}
return a*b+c
};
var argument5 = true;
var argument6 = 126;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = [100,82,823,5e-324,655,82,0]
base_3['length'] = true
return a-b/c
};
var argument8 = "";
var argument9 = -100;
var base_0 = [893,157,714,242,627,627,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,714,242,627,627,618]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,714,242,627,627,618]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,714,242,627,627,618]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)