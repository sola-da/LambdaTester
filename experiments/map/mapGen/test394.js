





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][7] = [843,157,714,627,-100,82,213,-100,595,-100]
argument3 = null
argument2[82] = false
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
base_1[7][2] = {"aw":"{","q":25,"1.4521278080188225e+308":"_'wA","8.666696375898102e+307":705,"8.988199200602447e+307":6.345778397287683e+307,"-":1.2897233726693175e+308}
return a/b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"82":"b"}
base_2[2] = null
return a+b-c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "{l"
argument6[4] = [-100,",HL",823,893,59,122,607]
argument7['T'] = 5.672403839097887e+307
return a+b+c
};
var argument6 = ["t-","x-","Xk8Tb6","PsR<&p","q","a$5Yc","E","-"];
var base_0 = ["U","`","l","P","80I","%^","C_","4","@","E"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U","`","l","P","80I","%^","C_","4","@","E"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U","`","l","P","80I","%^","C_","4","@","E"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)