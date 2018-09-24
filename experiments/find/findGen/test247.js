





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = "w*3"
base_0[5] = true
base_0[0][2] = {"242":49,"m^":1.8869433261478022e+307}
return a*b/c
};
var argument2 = "e";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[100] = 242
base_1[0][0] = {"25":618,"655":"","":"","'w%":"[","DyX":1.4324961336853825e+308,"y":460}
return a-b*c
};
var argument5 = true;
var argument6 = [655,100,823,460];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"823":"","":783,"1.401968890243631e+308":"","g":1.1039552531121805e+308,"5.954387491102215e+307":1.5835697485834718e+308,"5.658313676984396e+307":6.231514902532403e+307}
argument9 = 1.5015153521647132e+308
base_2[1][7] = ["t","G","X","{","+Iz+"]
return a/b+c
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = null
return a+b/c
};
var argument11 = r_2;
var base_0 = ["+","D:#","-","B"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","D:#","-","B"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","D:#","-","B"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","D:#","-","B"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)