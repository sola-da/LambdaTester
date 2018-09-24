





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = true
argument2[0] = ""
return a+b-c
};
var argument2 = [157,607];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
argument5[1.0446313380579697e+308] = [":","a",783,"G",655,893]
argument6[49] = [893,-100,-1,705,783,607,595]
return a-b/c
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = {"8":"","<":1.0081564617088193e+308,"1.397124883489708e+307":"","1.317927430733045e+308":627,"j":""}
argument8['am'] = 1.076137073438524e+308
argument8[1.0446313380579697e+308] = {"4":"","403":1.4887994696119536e+308,"1.4882229437112304e+308":"","1.7326614122430217e+308":"N","1.780777730741967e+308":"0E","-1":"uQ:u8","2.6590327772946186e+307":"2E","":"","1.7760928283219152e+308":""}
return a-b+c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = "ZF"
base_3[6] = 403
base_3[3][0] = true
return a/b+c
};
var argument11 = [607,595,122,403,403,59,0,714,0,100];
var argument12 = null;
var base_0 = [893,714,627,823,607,122,595,1.7976931348623157e+308,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,714,627,823,607,122,595,1.7976931348623157e+308,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,714,627,823,607,122,595,1.7976931348623157e+308,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,714,627,823,607,122,595,1.7976931348623157e+308,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test594.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)