





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = ""
argument3[714] = ""
base_0[2][5] = 595
return a/b-c
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = true
base_1[3][2][6] = true
return a/b*c
};
var argument5 = true;
var argument6 = {"122":2.640725102866449e+307,"460":1.2153029408957428e+308,"893":"","j":714,"5e-324":"5","":7.528294534245123e+307,"_?G":126,"UK":1.7976931348623157e+308,"#NO":"Q]","si":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = 1.52523467533856e+308
argument8[607] = {}
argument8[49] = null
return a-b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
base_3[0] = {"595":49,"823":4.937006272836343e+307,"893":"","1.6545899298106146e+308":3.2416166400331386e+307,"":"_","Q":1.77856732206893e+307,"1.092374126766535e+308":"F","=k6m5p":"kBi7W"}
return a/b/c
};
var base_0 = [823,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,213]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,213]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,213]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test844.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)