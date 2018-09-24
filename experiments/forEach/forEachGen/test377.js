





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
base_0[4] = ":mH"
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = null
argument3 = false
argument3[7.92397107964922e+307] = {"":"","G":1.0356160915172718e+308,"1.1057125282085922e+307":25,"|":"g{+|","4.2008371116378156e+307":1.2923497041701724e+308,"4.683527225590161e+307":1.5537421725364437e+308}
return a-b-c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = null
return a/b-c
};
var argument6 = false;
var argument7 = [5e-324,100,-1,705];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = null
argument9[0] = "V"
return a-b*c
};
var argument9 = {"100":"&","595":242,"714":25,"sn":"","NhC1":"","3.663397029515479e+307":627,"":4.936935561403981e+307,"5e-324":"Q","m<P":157};
var argument10 = false;
var base_0 = ["E2E","g","0","boL","z"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E2E","g","0","boL","z"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E2E","g","0","boL","z"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E2E","g","0","boL","z"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)