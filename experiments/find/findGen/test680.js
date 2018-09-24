





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = ["={a","UN","a?","?","p$","fwg(","L{","}","dG"]
argument2[7] = [403,403,-100,655]
return a-b-c
};
var argument2 = r_0;
var argument3 = "Z";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
argument5['='] = false
argument5[1] = ""
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[705] = null
argument7['AA@'] = "eO"
argument7[893] = ";"
return a*b+c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument8[242] = [82,655,0,627,122,783,714,969]
base_3[1][2] = {"0":8.523647023939614e+307,"100":"u","893":"l","eJ":3.0075778766771104e+307,"L":25}
return a-b+c
};
var argument8 = false;
var argument9 = 1.5069958519299766e+308;
var base_0 = [823,705,157,25,969,213,969,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,705,157,25,969,213,969,100]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,705,157,25,969,213,969,100]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,705,157,25,969,213,969,100]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)