





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5] = {"157":1.1713102259137485e+308,"403":122,"783":607,"969":823,"1.366743586472057e+308":"[","":"76","1.187259722010475e+308":"","Jo)MBE6":"6","-100":""}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['{X'] = false
return a/b-c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][8] = null
argument5[705] = ""
base_2[4] = null
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = [823,122]
argument7 = 157
base_3[7] = "v"
return a/b+c
};
var argument6 = {"25":122,"":1.298530573673951e+308,"E2p|E1_":"x","*N":"g","1.1487048473586838e+308":1.7976931348623157e+308,"Z[":1.7294317012239148e+308};
var argument7 = null;
var base_0 = [1.7976931348623157e+308,618,100,655,"pt",969,"B","(!h","l","dL5"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,618,100,655,"pt",969,"B","(!h","l","dL5"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,618,100,655,"pt",969,"B","(!h","l","dL5"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,618,100,655,"pt",969,"B","(!h","l","dL5"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)