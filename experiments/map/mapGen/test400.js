





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = 705
argument2[1]['d'] = {"":"","1.615466308587798e+308":""}
argument3[157] = 1.8940948791590646e+307
return a+b+c
};
var argument2 = 25;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [59,893,460,607,595,705,0,714,893]
argument5[157] = null
base_1[3][2] = ["^",5e-324,627,"2","F"]
return a+b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = true
argument6['A'] = null
argument6[5] = [460,969,403,823,705,783,714]
return a*b*c
};
var argument6 = 618;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['3Tpj5'] = 1.1785279912427525e+308
argument9[2] = 9.87718641611542e+307
argument9[49] = [655,0,242,213,714,157]
return a+b/c
};
var argument9 = r_1;
var argument10 = {"25":"?f","403":1.7976931348623157e+308,"5.355495606514474e+307":618,"":1.2459583969629373e+308,"<|":"?!","Va":843,"1.5109538778533692e+308":""};
var base_0 = [122,595,1.7976931348623157e+308,655,595,1.7976931348623157e+308,705,242,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595,1.7976931348623157e+308,655,595,1.7976931348623157e+308,705,242,49]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,595,1.7976931348623157e+308,655,595,1.7976931348623157e+308,705,242,49]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)