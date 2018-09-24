





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"25":""}
return a/b/c
};
var argument2 = false;
var argument3 = [823];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.268696794505825e+308] = true
base_1[0][6] = "#"
base_1[1] = ""
return a/b+c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
base_2[0][2] = 7.464994369111949e+307
base_2[1][5] = false
return a-b*c
};
var argument8 = 1.5043239326936332e+308;
var argument9 = [-100,25,157,49,893,403,460];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = "JA"
argument11[5] = ""
return a-b-c
};
var argument11 = r_2;
var argument12 = {"":9.816249924474868e+307,"1.3444831902542666e+308":"","A":655,"a":595,"T^":1.3294958015173346e+308,"{v(l":1.4794981401355819e+307};
var base_0 = [843,126,714,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,126,714,157]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,126,714,157]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,126,714,157]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)