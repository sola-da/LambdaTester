





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"8":"En","618":5.510037408115299e+307,"":4.4610977067049145e+307,"3.7174814298099856e+307":893,"6.133378363659573e+307":"C1","1.198177549291448e+307":"d"}
base_0[0] = ":"
argument3['T'] = true
return a+b-c
};
var argument2 = "$";
var argument3 = {"49":126,"i":"","3.1928749360341723e+307":126,"Qa":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['A'] = 1.4094873580028331e+308
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [122,-1,618,5e-324,460,893,100,0,843,714]
argument7['V'] = false
argument7[714] = {"242":"","607":59,"6.898675368803997e+307":"-","4.2025645035627986e+307":460,"2!":"","":460}
return a/b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = [82,"j8","0",460,403,"sc+","r",59,"|]|"]
base_3[1][3.5329845145600404e+307] = {"25":"","122":8.761372882092927e+307,"893":1.4800329135545389e+308}
return a+b/c
};
var argument8 = 627;
var argument9 = null;
var base_0 = [-100,627,59,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,627,59,595]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test933.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)