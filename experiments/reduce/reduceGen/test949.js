





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = [126,460,460,655,157,595,49,460,-1,460];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 100
base_0[5] = [607,213,403,25,783,893,714,-100,618,893]
argument3[1.3938918493123786e+308] = 1.821438298691457e+307
return a/b/c*d
};
var argument5 = true;
var argument6 = true;
var argument7 = {"49":1.6331227501567215e+308,"82":"","714":1.2145195246067503e+308,"783":1.539690874447517e+308,"":25,"1.4439330917568909e+308":"","h":783,"1.285779650704602e+308":49};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.999889602676851e+307] = null
argument6[627][126] = false
return a/b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = 7.110582030918201e+307
base_2[1][0] = 2.447096838821653e+307
return a*b-c-d
};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 1.9561149978024475e+307
base_3[7] = null
base_3[2] = null
return a-b-c-d
};
var argument12 = true;
var base_0 = ["z",242,"B","@","8{IF","n"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z",242,"B","@","8{IF","n"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z",242,"B","@","8{IF","n"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z",242,"B","@","8{IF","n"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test949.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)