





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ["aJ","Je"]
base_0['length'] = [59,893,460,607,595,705,0,714,893]
base_0[4][4] = null
return a/b+c
};
var argument2 = ["^",5e-324,627,"2","F"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = true
base_1[3][0] = null
argument6[1] = [460,969,403,823,705,783,714]
return a*b*c
};
var argument5 = 618;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 1.1785279912427525e+308
argument7['1SHF1'] = 9.87718641611542e+307
base_2[0][0] = [655,0,242,213,714,157]
return a+b/c
};
var argument8 = true;
var argument9 = {"25":"?f","403":1.7976931348623157e+308,"5.355495606514474e+307":618,"":1.2459583969629373e+308,"<|":"?!","Va":843,"1.5109538778533692e+308":""};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['1SHF1'] = ")("
argument11[2] = {"122":1.6811067497749462e+308,"Y":"b","D":"","G":""}
base_3[3][1.3434821406183095e+308] = ["9"]
return a*b-c
};
var argument11 = null;
var argument12 = null;
var base_0 = [157,595,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,595,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,595,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,595,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)