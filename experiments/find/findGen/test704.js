





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[242] = {"242":"","705":"g]","5.397598582057316e+307":"<",")N":59}
base_0[4] = {"655":1.4075025766174452e+308,"":403,"9Je":1.6152525549542885e+308,"1.29290605933447e+308":1.466807220356932e+308,"9.818022986609848e+307":618,"=n":1.5803295895997119e+308,"9BN":"s"}
argument3[5] = true
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = true
argument4[3] = [655,823,25,"p",618,"%","J"]
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = [823,-100,783,714,618,893]
argument5[403] = ["9","1{Q3(v","Oo(XfY##y",">"]
base_2[4] = ["K","D",460,595,")t","ORE6"]
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ["62",";k","k0","0>Dr","E","x","f3?","e","Cb$lJ","t"]
argument6[2] = -1
return a+b+c
};
var argument5 = r_0;
var argument6 = r_3;
var base_0 = [126,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,82]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,82]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,82]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test704.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)