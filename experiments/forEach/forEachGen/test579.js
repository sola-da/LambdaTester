





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"627":1.3746811426083933e+308,"S":1.3822230366215868e+308,"":"","+":"6"}
base_0[0][0] = "j"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7394185942769049e+308] = null
argument3['am'] = {"7.878271273476907e+307":"0","":1.7948192430596281e+308}
argument4[1] = null
return a-b*c
};
var argument3 = true;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.92397107964922e+307] = {}
return a/b*c
};
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = true
argument9[5] = null
argument10[3] = 843
return a/b*c
};
var argument9 = 823;
var base_0 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)