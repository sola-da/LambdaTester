





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
argument3 = true
return a*b+c
};
var argument2 = "";
var argument3 = {"":"","Fa":1.3315470970890503e+308,"MO":"o"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.7668525981726295e+307] = ["4","KU(#",")>B","[,","y;!"]
argument6[0] = 6.852474267697569e+307
return a*b*c
};
var argument5 = {"0":59,"7.605538877412467e+307":"kF>","8.026424832907269e+307":"uV"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[969] = "_"
argument8[1] = 627
return a*b*c
};
var argument7 = 1.387881611637958e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = false
base_3[1][1] = ["g-{","b?","6","M","k"]
return a/b/c
};
var argument9 = null;
var argument10 = false;
var base_0 = ["!","I","<kL","ML"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","I","<kL","ML"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","I","<kL","ML"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","I","<kL","ML"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)