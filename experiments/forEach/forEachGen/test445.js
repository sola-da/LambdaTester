





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = 403
base_0[1][2] = {"403":"","893":618,"":"",";":"","1.3222620688117873e+308":9.093319114657293e+307,"-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""}
return a*b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.0481490052276395e+306] = {"705":"jB","z}":"u","Wh`":1.129287391905667e+308,"1.0124182806331064e+308":"-@","1.1777561018768243e+308":" #","b":"<Gd","":1.7722917579249007e+308,"c;":5.692616949174869e+307}
argument3['1SHF1'] = {"126":""}
argument4[1.3130321063336282e+308] = {"1.8700611047696698e+307":""}
return a/b/c
};
var argument4 = "m-";
var argument5 = [618,460,893,655,157];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = [595,"&oQ",595]
return a-b*c
};
var argument7 = false;
var argument8 = [126,25,25,714,843,618,213,82,607];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['U+WQ'] = -100
argument10[3.0481490052276395e+306] = true
argument9[2] = [618,1.7976931348623157e+308,157,0,714,460]
return a+b/c
};
var argument10 = ["}","9U","LO","ijV","Qe)","+fG$","Jnn","s"];
var base_0 = [100,460,460,0,100,242,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,460,0,100,242,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,460,0,100,242,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,460,0,100,242,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)