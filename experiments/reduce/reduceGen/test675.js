





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
return a+b-c/d
};
var argument2 = "";
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[59] = [122,893,627,213,893,213,823,242]
argument3[25] = null
argument4['*c'] = null
return a+b*c/d
};
var argument6 = ["sj","({"];
var argument7 = r_1;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.331954948603684e+307] = ""
argument8[7.889879335222838e+307] = {"714":"L8S","":9.80000389250721e+306,"2.079559008198879e+307":"","l":"","W":"Sh^"}
argument8[0] = null
return a*b/c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.1280896016417002e+307] = null
argument12[403] = null
return a-b-c/d
};
var argument11 = null;
var base_0 = [";","3[!^P","B3","1","p","V",">X7ah"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","3[!^P","B3","1","p","V",">X7ah"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","3[!^P","B3","1","p","V",">X7ah"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","3[!^P","B3","1","p","V",">X7ah"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test675.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)