





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = [49,"h",213,122]
argument3['n,5s@s'] = true
argument1[2] = {"wD":"z8","M":4.06035286321483e+306,"7.453573093466299e+307":"","{!,4J":"mz8MD","":9.398811658287839e+307,"3.7311326337870444e+307":""}
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = null
argument3[0] = null
return a*b/c
};
var argument4 = {"100":460,"714":1.2978451279858456e+308,"969":100,"":"S+",",4!p":"","mfAq":49,"1.2673612982114394e+308":1.083619356654681e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0727847755854773e+308] = true
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = ""
argument8['T'] = false
return a+b+c
};
var argument7 = ["D","^",607,403,82,"e",157,595,"$"];
var argument8 = [655];
var base_0 = ["i7h","S`","M","(","8"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i7h","S`","M","(","8"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i7h","S`","M","(","8"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i7h","S`","M","(","8"]
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
require("fs").writeFileSync("./experiments/some/someGen/test929.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)