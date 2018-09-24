





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = true
base_0[1][2] = ["T","feq","!0N^"]
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][5] = {"82":"","":"U{","8.802888491078732e+307":1.3399567948146021e+308}
base_1[4][1.5144566325729397e+308] = true
base_1[1][4] = 242
return a/b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = ""
argument5[1.6706143966770798e+306] = {"122":"nK","9N":1.520580888847532e+308,"si":1.0689344404352544e+308,"":157,"2.3112160398096685e+307":1.7976931348623157e+308}
base_2[1][6] = 9.422724886110632e+307
return a*b-c
};
var argument5 = [-100,460,403,460,403];
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = true
argument7 = {"627":";","l":"@%}I#","C":"","1.3931863404611922e+308":9.741680130329152e+306,"":0}
argument8['sJRZP'] = {"783":893,"}Z":59,"1.3512187900017211e+308":"!","2.1210138093361256e+307":"LG","":"%y"}
return a+b-c
};
var base_0 = [-1,"9;W"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"9;W"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"9;W"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"9;W"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test836.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)