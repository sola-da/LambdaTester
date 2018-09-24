





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[714] = {"157":1.6688851996981808e+307,"595":"Di","4.289202821409071e+307":"(L;","MPM[Ty<":8.198198139125917e+307,"":893,"F":"","@<":"<","O":1.6626895615346544e+308}
base_0[1]['['] = ""
return a+b+c
};
var argument2 = [122,618,5e-324];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"1.456203133682739e+308":";","":8.889403371822815e+307,"1.2824268443199103e+308":5.5741150803673835e+306}
base_1[2] = {"25":""}
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = 213
base_2[7] = [-100,607,403,-1,-100]
return a*b/c
};
var argument5 = 607;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = {"":1.4194084807601295e+308,"-100":""}
base_3[3][1] = null
return a/b/c
};
var base_0 = [126,705,714]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,705,714]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,705,714]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,705,714]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)