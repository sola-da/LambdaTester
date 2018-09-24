





var callbackArguments = [];
var argument1 = null;
var argument2 = ["x85","+"];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1532786076532189e+308] = {"0":"b","82":"*","242":"","":6.391826152477716e+307,"1.3171758971133823e+308":5.832570911026158e+307,"@":""}
return a-b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = null
base_1[1][0] = true
return a+b*c/d
};
var argument6 = null;
var argument7 = null;
var argument8 = true;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.1280896016417002e+307] = {"595":"D","823":"oJ","e_N8OP":126,"E":"XVR","1.240316454555265e+308":595,"[<":1.269327409957351e+308,"":"","1.666984167805998e+308":5.183026948812648e+307,"5.416925013280973e+307":1.5884285480695022e+308}
argument8[627][126] = null
return a/b+c+d
};
var argument11 = null;
var argument12 = false;
var argument13 = r_3;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
return a/b*c/d
};
var base_0 = ["<,","1","#","gT","X"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<,","1","#","gT","X"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<,","1","#","gT","X"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<,","1","#","gT","X"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)