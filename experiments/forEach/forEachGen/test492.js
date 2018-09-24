





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = {"0":126,"25":0,"460":"j",":lT":1.4376376877324959e+308,"-1":"S","":"|t","1.039081929067825e+308":8.479404047906074e+307,"Q><":4.0737227502458114e+307,"?%":6.348620818208779e+307}
return a+b/c
};
var argument2 = [126];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.0481490052276395e+306] = ""
argument4[2][783] = false
argument4[5] = 783
return a*b/c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7976931348623157e+308] = [705,25,49,783,213,705,893,242]
base_2['length'] = false
return a*b+c
};
var argument7 = {"G":6.083233433045117e+307,"^mD5":595,"$-":2.8198366532876196e+307,"1.4240203058220243e+308":403,"RZ":"w","36w5P":705,"":1.1351591417277766e+308,"1.0141468414457695e+308":""};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = {}
return a/b*c
};
var base_0 = ["m","G&","y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m","G&","y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m","G&","y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m","G&","y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test492.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)