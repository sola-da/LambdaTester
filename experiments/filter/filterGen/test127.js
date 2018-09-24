





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
base_0[7] = [157,242,82]
base_0[4] = {}
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][2] = {"2.816756418053301e+306":893,"1.1169136399881119e+308":1.2422978633686517e+308,"A":1.6713643503880067e+308,"":969}
base_1[1] = {"126":"&","!cck7Mm":618,"4.566482507036003e+307":1.0401645246124907e+307,"U":"8Nl!","JY":242,"":0}
argument3[0] = ["Z::i,","}","x","JLwJ"]
return a+b*c
};
var argument3 = null;
var argument4 = [607,618,627,627,893];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = ""
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = ""
return a/b+c
};
var argument7 = true;
var argument8 = "sz";
var base_0 = [893,627,618,126,618,893,595,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627,618,126,618,893,595,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627,618,126,618,893,595,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627,618,126,618,893,595,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)