





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0[0][3] = {"126":5.617548561403656e+307,"843":6.733237570966441e+307,"8.934440994133963e+307":"","2Ge":1.2306292143421976e+308,"aawm=l":6.920245506902463e+307,"":1.4864720917501648e+308}
return a-b-c/d
};
var argument2 = r_0;
var argument3 = r_1;
var argument4 = ["a","B"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "TF"
return a/b+c+d
};
var argument6 = null;
var argument7 = " ";
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[213] = ""
base_2[1] = {"9":3.028081793329735e+307,"157":"","460":"w","":"0n","%`":"","2.586238840816643e+307":"","_u":4.275455691453089e+307}
return a*b*c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = true
base_3[1][0] = true
base_3[1] = [122,607,122]
return a/b+c+d
};
var base_0 = [627,403,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test139.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)