





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
base_0[1] = "ljN"
base_0[0][1] = ["y7","&r","TsH;&"]
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1881593224845412e+308] = {"6":213,"":403}
argument3[242] = [627,157,627,627]
return a-b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[126] = {}
argument5 = {"49":"","157":"'","843":1.253324701062324e+308,"969":8.309682072656195e+307,"zf":"","PgL8;;12@:@6":1.7976931348623157e+308,"":"","JH":2.7169071965688056e+307,"1.7976931348623157e+308":157,"1.4826608145417983e+308":""}
return a*b-c
};
var argument5 = true;
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = false
argument9[5] = 1.5536890032184226e+308
return a*b-c
};
var argument8 = 49;
var base_0 = ["[!Y)!4","z-","5g","|^","U","?","^","$C","F"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[!Y)!4","z-","5g","|^","U","?","^","$C","F"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[!Y)!4","z-","5g","|^","U","?","^","$C","F"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[!Y)!4","z-","5g","|^","U","?","^","$C","F"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)