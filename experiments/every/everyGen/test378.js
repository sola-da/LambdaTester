





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = "f9zgt4n!ZJR]W"
return a-b/c
};
var argument2 = false;
var argument3 = ["5","g","g5t","<-","V"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = ["^","J","y","9k(@","WM73","DU="]
base_1 = ["R","goM#","4"]
argument5[6] = ["E",403,82,";",0,705]
return a-b/c
};
var argument5 = [25,59,403];
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"242":25,"1.5250009840375293e+308":460,">":1.24853845811635e+308,"-100":460,"9.221307408465865e+307":"*B;S"}
base_2[9] = {"9":"","8.448813815722637e+307":"p","2.8101243452369757e+307":3.3093600507749473e+307}
argument8[1] = null
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 618
return a+b+c
};
var argument9 = null;
var argument10 = {"0":"","7":460,"100":"k","126":6.340465611767413e+307,"705":1.4398735094741914e+308,"I{g":"cboL","":1.3679594957914488e+308};
var base_0 = [82,-1,-100,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,-100,242]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,-100,242]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,-100,242]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test378.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)