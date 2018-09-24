





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = ""
base_0[5][2] = "F"
argument2[4.960033715165713e+307] = {"0":2.189447710339186e+307,"893":4.1344783942394097e+307,"VL":7.280407461847225e+307,"6.72248050990141e+307":"Pp","1.3062595146323715e+308":714,"":403,";":0,"1.6718606159608172e+308":100}
return a-b/c
};
var argument2 = ["[k"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6.148642213884202e+307] = {"595":"U&'","1.1420318111920398e+308":59}
base_1[1][5] = false
base_1[6] = null
return a*b/c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = null
base_2[2] = null
argument8[4] = ["%","zmRf","7","%O",">","-","z]y@{","IL"]
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 82
base_3[6] = {"":126,"C":""}
return a/b+c
};
var argument8 = "";
var base_0 = [1.7976931348623157e+308,59,460,213,100,460,82,1.7976931348623157e+308,823,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,59,460,213,100,460,82,1.7976931348623157e+308,823,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,59,460,213,100,460,82,1.7976931348623157e+308,823,893]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,59,460,213,100,460,82,1.7976931348623157e+308,823,893]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)