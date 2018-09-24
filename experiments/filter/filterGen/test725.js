





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = "P"
base_0[0][0] = "zur`"
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8][3] = true
argument4['wIs'] = null
return a*b-c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = null
argument8[5.262931091360336e+307] = {"25":8.162212996258392e+307,"100":"","403":"","714":1.7976931348623157e+308,"783":9.517855947793559e+307,"1.0969309609290941e+308":6.547103467577945e+307,"":25,"8.833083949663643e+307":5.146571207714699e+307,"h":""}
return a-b*c
};
var argument7 = {"157":9.53198597113641e+307,"823":627,"893":"","3.678685114957028e+307":"","FCA":403,";{":""};
var base_0 = ["{U","S","$LP","wi","w7TJ",893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{U","S","$LP","wi","w7TJ",893]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{U","S","$LP","wi","w7TJ",893]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{U","S","$LP","wi","w7TJ",893]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)