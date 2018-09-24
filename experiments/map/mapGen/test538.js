





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ["K#OY","w","Q","3C","?Ba","k","D"]
argument3 = null
argument2[4] = [655,595,714,100]
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [59,607]
argument5[6] = {"h":7.27404797018519e+307,"":3.7205720420289216e+306}
argument3[3] = ["ChR=",82,"^",157,969,"R",705,82,1.7976931348623157e+308,82]
return a+b/c
};
var argument4 = {"":1.388154011477197e+308,"i":"uN","1.7976931348623157e+308":""};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
argument8[7] = ["7"]
base_2[2] = false
return a+b/c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = true
return a-b/c
};
var argument9 = {"157":3.7431150429759234e+307,"655":1.4514268826719773e+307,"6.974757239010472e+307":"$","":213,"m":59,"1.2667003520001262e+307":157,"c":1.1414727688666334e+307,"8.887355306257335e+307":460};
var base_0 = ["lWA",1.7976931348623157e+308,")[","aw","7","2","H",49,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["lWA",1.7976931348623157e+308,")[","aw","7","2","H",49,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)