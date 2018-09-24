





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = true
argument3[627] = {"49":"","618":"nT","969":1.6100043800319759e+308,"p":2.039631306145281e+307,"":122,"=":8.369463992813085e+307,"B":"u!v","5.579746962866273e+307":242,"^":"","w":242}
return a*b/c-d
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[126] = {"213":"","":1.6697294983660139e+308,"5.82106078880228e+307":"","zIKQ":"","qI:5T":1.3518123953809322e+308,"BN`":""}
return a+b/c-d
};
var argument5 = 893;
var argument6 = null;
var argument7 = "[T";
var argument8 = r_1;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = [82,49,242,627]
argument8[627] = 618
return a/b-c*d
};
var argument10 = true;
var argument11 = r_0;
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = ""
return a/b*c+d
};
var base_0 = ["S","M","U",49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S","M","U",49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S","M","U",49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S","M","U",49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test511.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)