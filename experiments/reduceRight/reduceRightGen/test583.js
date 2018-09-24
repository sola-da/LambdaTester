





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"49":-100,"1.7976931348623157e+308":460,"E":"|","1.0119267804681502e+308":1.7899747346184498e+308,"":"q","w@":25,"a !":783}
argument2['L'] = [1.7976931348623157e+308,783,122,705,893,242,126,595,705,969]
return a/b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = 1.0873761742430248e+308
argument4 = null
argument4[8] = [823,705,100,893,403]
return a+b/c-d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = "vn"
argument5[82] = [25,823,157,403,126,82,969]
argument5[1.738403780925446e+308] = ":I{"
return a*b/c/d
};
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 4.025126268733661e+307
argument8[1] = true
base_3[0] = null
return a*b+c-d
};
var base_0 = [":","^yiu","W","3,","+d","s@i","vv9z6"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","^yiu","W","3,","+d","s@i","vv9z6"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","^yiu","W","3,","+d","s@i","vv9z6"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","^yiu","W","3,","+d","s@i","vv9z6"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)