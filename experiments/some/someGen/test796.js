





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = [403,403,100,595,403]
base_0[8] = 8.930014526114126e+307
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"595":0,"1.7588141193640082e+308":"gs","8.9385800644062e+307":"","s":"<|1","1.2479726824849472e+308":627,"-":607,"":","}
return a-b/c
};
var argument3 = {};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = [783,"Vg7","j","E",-100,59,"P>A",893,"5"]
argument6[7.004668712060429e+307] = ["c0","-@H"]
argument5[4] = false
return a*b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = {"7":"O3","Kk":8.981739169981482e+307,"Ub":157,"":1.0869701198849239e+308,"XY":"",";N":1.7940094205902534e+308}
argument7[1] = [705,893,618]
return a+b-c
};
var base_0 = [893,-1,126,595,100,1.7976931348623157e+308,893,242,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,126,595,100,1.7976931348623157e+308,893,242,655]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,126,595,100,1.7976931348623157e+308,893,242,655]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,126,595,100,1.7976931348623157e+308,893,242,655]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test796.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)