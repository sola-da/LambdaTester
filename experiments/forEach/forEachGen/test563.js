





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ["m","Es","a","2","&","3","vMk","N","#"]
base_0[9] = null
base_0[1][2] = [460,"vYn",82,"1","+?H$q",5e-324,242,893,157]
return a-b*c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7.92397107964922e+307] = [823,122,5e-324,843,893,627,655,618]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['-'] = [0,893,783,126,-100]
argument6[3] = 242
base_2[3][1.3434821406183095e+308] = 8.065664230134135e+307
return a+b+c
};
var argument6 = ["tG",49,-100,"(",">",213,"X"];
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = false
argument9[7] = 1.69457723897452e+308
return a-b-c
};
var argument9 = null;
var argument10 = r_0;
var base_0 = [-100,783,627,242,893,122,714,714,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,783,627,242,893,122,714,714,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,783,627,242,893,122,714,714,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,783,627,242,893,122,714,714,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)