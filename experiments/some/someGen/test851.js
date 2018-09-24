





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f9zgt4n!ZJR]W'] = 595
argument2[2.249941463060761e+307] = ""
argument3[893] = false
return a/b/c
};
var argument2 = 1.4128943525779772e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = null
argument5[122] = ""
return a/b-c
};
var argument4 = {"213":893,"705":"=","":"f","9.74261376463171e+307":"_-eBV","W":1.1346648510059173e+308,"|":"","7.73194812365835e+307":"*","y@2":"","8.523867779985269e+307":"R"};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][1] = {"25":1.1999367400411956e+308,"213":1.3107411762195287e+308,"403":"","655":1.4331339990661012e+308,"969":"7","":"Y0","1.568441366636806e+308":"a","&":"","k":242,"1.7415462120170185e+308":1.1107299106965856e+308}
argument8[1] = "L"
base_2[5] = false
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['5L'] = "4"
return a+b-c
};
var base_0 = ["i","I","x","b","}",":g","82"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","I","x","b","}",":g","82"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","I","x","b","}",":g","82"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","I","x","b","}",":g","82"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test851.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)