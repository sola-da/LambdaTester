





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = false
argument1['VsR'] = true
return a+b-c
};
var argument2 = {"c":1.7976931348623157e+308,"9.907141049118543e+307":"",")G":"H","1.7976931348623157e+308":1.362993392762172e+308,"^":""};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "1%"
base_1[7] = ["vlc",":M","9","e"]
argument5['$*I'] = ""
return a*b/c
};
var argument5 = false;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = [705,5e-324,783,5e-324]
base_2[0][2] = ["N_","X","F","g*",";"]
return a-b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = [460,823,82,655,823,969,0,705]
argument10['U+WQ'] = null
base_3[2] = {"49":1.5308123765134388e+308,"126":2.0754401710997942e+307,"627":59,"c":-1,"":"","#":"a"}
return a*b+c
};
var base_0 = [242,403,126,157,823,59,607,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,403,126,157,823,59,607,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,403,126,157,823,59,607,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,403,126,157,823,59,607,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test994.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)