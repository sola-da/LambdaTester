





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
return a-b/c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = 460
argument4['f9zgt4n!ZJR]W'] = 618
base_1[1] = true
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.551053197482062e+307] = 893
return a/b-c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"460":")xTp","893":3.024784948636638e+307,"3Y":1.4010006635602571e+308}
base_3[4][7] = 82
argument8[403] = null
return a+b+c
};
var argument7 = null;
var argument8 = false;
var base_0 = [242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)