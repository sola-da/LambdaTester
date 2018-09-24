





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {}
argument2[3] = [618,"];"]
base_0[1][3] = false
return a-b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 2.1009554588497523e+306
argument2[2.1280896016417002e+307] = false
return a-b*c-d
};
var argument3 = false;
var argument4 = false;
var argument5 = null;
var argument6 = "";
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = false
return a-b-c/d
};
var argument9 = null;
var argument10 = null;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"":-1,"1.3345835458520504e+308":"0 ^8D"}
base_3[3][1] = {"843":3.196868415056071e+307,"969":655,"9.099069905106114e+307":"","1.3864397009795719e+308":1.5130150144722329e+308,"H":"@","":5.737665577948909e+307,"1.0805493611757923e+308":"","9.388213507930638e+307":3.9725665041051536e+307,"B,":"W+G"}
argument11[403] = null
return a+b-c-d
};
var base_0 = ["k+D","Isq","X]]#","F"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k+D","Isq","X]]#","F"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k+D","Isq","X]]#","F"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k+D","Isq","X]]#","F"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)