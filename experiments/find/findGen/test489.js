





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ["Lev<[2CoSQ","T_r*Tx8L","a","Nw","H","J7$",">,","&]","I"]
return a+b/c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = [213,"y",714,"qF86","-",-1,"j)",607,"DNE","AP"]
argument6['LK'] = true
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
argument6[3][6] = 3.0910583201369e+307
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = {"1.675220658780913e+308":"Ix","1.4494656574112715e+308":"JOCu]"}
base_3[4] = null
return a-b*c
};
var argument7 = {"969":59,"1.704614029703292e+308":4.0655527393368233e+307,"*p:":655,"-100":126,"Z":823};
var base_0 = [242,25,242,714,823,242,25,655,122,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,25,242,714,823,242,25,655,122,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,25,242,714,823,242,25,655,122,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,25,242,714,823,242,25,655,122,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test489.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)