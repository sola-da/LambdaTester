





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 1.495342560590709e+308
base_0[6] = {"94!x&":"S","":7.775650504133382e+307,"Nd!(":"<:m"}
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = [0,242,122,893,655,893,705,82,126]
return a-b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = [618,403,"5",618]
argument6[157] = null
return a/b+c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"100":";","213":8.472551998417051e+307,"":"","#p":"","1.1268697338009697e+308":"","1.2980423231148904e+307":"","k":1.2080153122493356e+308}
base_3[3][2] = false
argument8['A'] = {"0":157,"126":823,"BsJ]@":627,"9.488557231727682e+307":618}
return a-b+c
};
var argument8 = null;
var argument9 = null;
var base_0 = [460,969,59,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,59,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,59,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)