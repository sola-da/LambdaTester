





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = {"0":"","4":2.738162128172362e+307,"403":714,"{":"!","3.477336919734759e+307":"Br","z":82,"3.22536091584024e+307":-1,"":"J",";5":"="}
argument2[3] = null
return a+b/c
};
var argument2 = [126,893,783,122,-100];
var argument3 = [627,"7"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = 49
argument6[59] = true
return a-b*c
};
var argument5 = ["H","]","3","ec=Dmx","{","gT","t7",":!"];
var argument6 = ["U","L","VRN","5","FCJ!l","U","%g","o"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[460][1.2658989034477382e+308] = {"823":8.738936526580617e+307,"893":1.0381881730825453e+308,"z":"","1.3051138583305119e+308":""}
return a-b/c
};
var argument8 = null;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [655,49,100,618,403,714,460,213,460]
argument11[1.0446313380579697e+308] = [126,655,595,100,627,893,-100,607,618]
argument10['1SHF1'] = 6.082663043870055e+307
return a-b+c
};
var argument11 = r_2;
var base_0 = [5e-324,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)