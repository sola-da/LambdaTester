





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = {"8.881392956330938e+307":""}
argument3[3] = true
argument3[3] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.7154103611117224e+307] = ""
base_1[4] = true
argument4[6] = false
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = false
argument5[6] = "vN*"
argument4[5] = 213
return a*b+c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = ["x"]
return a-b*c
};
var argument7 = null;
var argument8 = {"607":"","1.7976931348623157e+308":"qx","k":122};
var base_0 = ["nu>",49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nu>",49]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nu>",49]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["nu>",49]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)