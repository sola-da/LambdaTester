





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"100":893,"823":1.122304648096245e+308,"Z":1.353075942262485e+308,"":3.9745110622479753e+307,"{":"K","<eG|":"","F4":"hdb ]","1.1947264756250362e+308":1.3127941745042137e+308}
base_0[4][8] = false
base_0[8] = 49
return a/b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3][3] = true
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = [893,618,49,213,242,157,49,-100]
argument5['k<7bJ'] = null
base_2[1][0] = "4MNc"
return a+b+c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = [100,714,627,82,783,100,213,213]
argument8[403] = null
argument7[1.5109538778533692e+308] = 25
return a/b*c
};
var argument7 = [-100,843];
var argument8 = {"460":"C|`,","-100":8.044549172134657e+307,"":"","5.444156662448709e+307":6.513584168296054e+307,"5.018072413944494e+307":"0","D":"jr","ru":"2a_","1.1030928633982176e+308":49,"X*":""};
var base_0 = ["7E","Z","f2x?","A[{","x","tq2","v","s-dJAHU{D","tU"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7E","Z","f2x?","A[{","x","tq2","v","s-dJAHU{D","tU"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7E","Z","f2x?","A[{","x","tq2","v","s-dJAHU{D","tU"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7E","Z","f2x?","A[{","x","tq2","v","s-dJAHU{D","tU"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)