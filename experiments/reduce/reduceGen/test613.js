





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = {"":213,"1.1744174088437561e+308":"G","0v":1.3241101028666403e+308}
argument3[90] = {"126":"OS4","705":1.2168619359877964e+308,"1.095221741120859e+308":" ","1.2913912555942413e+308":1.6704199757802454e+308,"1.6003910617745889e+308":"T"}
return a-b+c/d
};
var argument2 = null;
var argument3 = "Z!g";
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.331954948603684e+307] = null
return a/b/c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.331954948603684e+307] = null
return a-b+c+d
};
var argument7 = "";
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.3938918493123786e+308] = false
argument11[5] = {"242":""}
return a/b/c/d
};
var base_0 = ["V",783,783,242,403,783,"{","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V",783,783,242,403,783,"{","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V",783,783,242,403,783,"{","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V",783,783,242,403,783,"{","R"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test613.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)