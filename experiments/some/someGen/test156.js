





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"843":1.2820883038964174e+308,"":"*MU+4","e0V":"","Q":1.3040424761965379e+308,"MMfW":""}
argument2[1.6798476101238045e+308] = null
base_0[8] = false
return a*b+c
};
var argument2 = null;
var argument3 = [607,59,"TT","bqxq5)!+","o:J3"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = [100,823,783,242]
base_1[4] = 1.258890884661723e+308
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.6798476101238045e+308] = {"25":7.013594759393452e+307,"714":705,"893":1.5922502641735272e+308,"%":-1,"":"<","I`<":"dd","-100":618}
return a/b-c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = null
return a-b+c
};
var argument8 = {};
var argument9 = "";
var base_0 = ["-p7@|[",843,242,783,595,"h",59,843,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-p7@|[",843,242,783,595,"h",59,843,618]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-p7@|[",843,242,783,595,"h",59,843,618]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-p7@|[",843,242,783,595,"h",59,843,618]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)