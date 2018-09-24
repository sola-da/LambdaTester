





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = [893,618,460,607,714,100,100,213,655,893]
argument3[4] = 4.2866013637106347e+307
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = null
argument3[4] = null
argument3[3.0481490052276395e+306] = 82
return a-b/c
};
var argument3 = [595];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4034744228995816e+308] = null
return a+b/c
};
var argument5 = {"0":"","655":-1,"_":"Y","":783,"1.0289694709990011e+308":893,",60Y":"","U":"","1.0092434642194107e+308":""};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = {"59":"'J","627":"","":1.3952514026713953e+308,"8.786623196418602e+307":"","1.4157886272800431e+308":"","ke4Yth":"","G":"Sm","1.2013829955713626e+308":"^"}
return a*b+c
};
var base_0 = [618,"S","c","?Q","X",783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"S","c","?Q","X",783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"S","c","?Q","X",783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"S","c","?Q","X",783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)