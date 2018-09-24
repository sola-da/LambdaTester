





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = true
base_0[4] = true
argument2[3] = 5.501052316200488e+307
return a*b+c
};
var argument2 = [122,"yI`TjV",25,"6(gh",403,"BjG)i%",59,"ke",","];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = null
return a/b/c
};
var argument4 = true;
var argument5 = {"100":-1,"122":59,"":"'J","8.78663006407101e+307":"olfp","1.2967816970383867e+308":1.5262101360947533e+308,"irL#":627};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = null
return a/b/c
};
var argument7 = null;
var argument8 = [122,59,823,607,783,"xUbv"];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = ""
argument10[714] = {}
argument10['A'] = {"82":59,"783":"","":"h","2Y>yPr[":714,"Bm;":"","6.953192544217866e+307":2.551163782560422e+307,"7.926412479491489e+307":""}
return a-b/c
};
var argument10 = true;
var argument11 = [823,403,403,82,122,843];
var base_0 = ["0","H","J","!h1","[",")&","B"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test83.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)