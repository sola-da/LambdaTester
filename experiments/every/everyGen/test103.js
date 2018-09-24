





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
base_0[3] = {"122":403,"403":"","9.607817540780348e+307":-100,"":"","0i3":"","3.1957046649601676e+307":607,"6.528474566582756e+307":893,"JN":-100,"t0":"|","1.7876495787331064e+307":""}
return a+b/c
};
var argument2 = null;
var argument3 = "Xz#<";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "|"
base_1[0][2] = null
return a/b*c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = "pM"
return a+b/c
};
var argument7 = {"1.098635400235862e+308":"5"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = {"5":1.7164142682506093e+308,"618":5.501426041361344e+307,"655":1.5703199617904595e+308,"":3.279289626245198e+307,"8.160735218048829e+307":607,"&jA":"","z":"V^&V"}
return a*b/c
};
var argument9 = null;
var base_0 = [618,-1,49,893,607,783,705,655,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,-1,49,893,607,783,705,655,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,-1,49,893,607,783,705,655,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,-1,49,893,607,783,705,655,82]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)