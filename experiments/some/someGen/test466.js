





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = {"K":"","":"LC+Gp","%":"","_":1.7646059527961267e+308,"9.973600037284269e+306":705}
base_0[3][6] = [627,25,893,969,242]
argument3[4] = null
return a-b/c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = null
argument5['f9zgt4n!ZJR]W'] = false
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = 1.0223615899596506e+308
argument6[618] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = {"242":-1,"655":1.6802980382828412e+307,"1.0709694670182599e+308":1.6479361311192935e+308,"":"{<Ua","3.24288912254094e+306":"9"}
return a*b*c
};
var argument7 = false;
var argument8 = null;
var base_0 = [714,403,705,126,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,403,705,126,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,403,705,126,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,705,126,-1]
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
require("fs").writeFileSync("./experiments/some/someGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)