





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][7] = [122,59,618,1.7976931348623157e+308,82]
argument2[1.7847438319683965e+308] = 1.467703747088698e+308
return a*b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = true
return a-b*c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = 460
argument8['jo'] = 1.7976931348623157e+308
return a-b-c
};
var argument8 = 5e-324;
var argument9 = r_1;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.7847438319683965e+308] = [1.7976931348623157e+308,25,-100,82]
argument12['T'] = ""
return a+b-c
};
var base_0 = [1.7976931348623157e+308,25,969,969,893,627,893,823,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,25,969,969,893,627,893,823,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,25,969,969,893,627,893,823,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,25,969,969,893,627,893,823,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test580.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)