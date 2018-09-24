





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 59
argument1[4] = false
return a*b+c
};
var argument2 = {"655":1.1337326592472868e+308,"9.48501638692669e+307":-100,"_W":157,"b":"Aa&","1.709805488705382e+308":"","[":"x"};
var argument3 = {"403":823,"655":25,"843":"-","8.028553293091058e+307":"w","!,'!|2":"^7","5.687793573896889e+307":"","GJ":969,"":1.3772409629936904e+308,"3}":"t"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = null
argument5[0] = "];p"
return a*b-c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][8] = ["D","<","|","u[J","s","Lv"]
base_2[2][5] = ["W","%}","qm"]
base_2[1][3] = ""
return a+b-c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['_W'] = ""
return a+b-c
};
var argument9 = [213,59,655,655,893,714,843,893,655];
var argument10 = r_0;
var base_0 = [843,157,627,607,242,0]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,157,627,607,242,0]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,157,627,607,242,0]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,157,627,607,242,0]
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
require("fs").writeFileSync("./experiments/some/someGen/test220.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)