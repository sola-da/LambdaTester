





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"5":705,"213":"","627":1.1851186141656086e+308,"":"","1.2551239020462008e+308":705,"!":122}
base_0[3] = {"1.7976931348623157e+308":5.954360656597689e+307,"5.230360397800698e+307":893,"2.6666257156277594e+307":9.086138392763165e+307,"H":5.652695993681963e+307,"":""}
base_0[0][0] = ""
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
argument4[2] = 1.1757412213767731e+308
return a-b-c
};
var argument3 = [714];
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 3.691133109462791e+307
argument7 = true
base_2[0][1] = 49
return a-b*c
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ""
base_3[0][6] = 2.9016624246537377e+307
argument9[0] = ""
return a/b-c
};
var argument9 = true;
var base_0 = [627,893,1.7976931348623157e+308,460,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,1.7976931348623157e+308,460,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,893,1.7976931348623157e+308,460,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,1.7976931348623157e+308,460,49]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)