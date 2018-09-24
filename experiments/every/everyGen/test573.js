





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"627":1.3746811426083933e+308,"S":1.3822230366215868e+308,"":"","+":"6"}
base_0[0][6] = "j"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
argument3[4] = {"7.878271273476907e+307":"0","":1.7948192430596281e+308}
base_1[5] = null
return a-b*c
};
var argument3 = true;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {}
return a/b*c
};
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.3599216339661573e+308] = true
argument9[1.3599216339661573e+308] = null
argument8 = 843
return a/b*c
};
var argument9 = 823;
var base_0 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rYpb","Og","qppRJ$)W#a","*4","Fn","ZhK","Fs","_","N","B"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)