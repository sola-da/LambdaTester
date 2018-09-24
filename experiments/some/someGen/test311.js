





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = "["
return a/b*c
};
var argument2 = false;
var argument3 = 1.440736120800303e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f'] = [403,714,823,157,595,655,705]
argument5[1.6798476101238045e+308] = ""
base_1[3] = {"893":7.240280692924666e+307,"969":"BK7","":6.938448406309804e+307,"1.3947812539337836e+308":"M","1.0821041346426643e+308":655,"1.30623148789356e+308":"`Ei","4.3134993151644504e+306":"R","1.2565065491335115e+308":627,"1.4528813035371673e+308":5.246456772914463e+307}
return a+b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"":"","F69!y":1.663833015683432e+308,"[":"","1.0960672535087112e+308":213,"|":""}
return a-b*c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = 6.396016056651079e+307
argument9[9] = 595
argument9[6] = ""
return a+b+c
};
var base_0 = [25,213,5e-324,242,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,213,5e-324,242,242]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,213,5e-324,242,242]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,213,5e-324,242,242]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test311.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)