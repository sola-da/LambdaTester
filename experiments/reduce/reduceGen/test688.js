





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = true
return a-b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[82] = {"59":"<&","82":1.2065779480975507e+308,"618":1.7976931348623157e+308,"":-1,"1.3711592335433266e+307":969,"1.050708518645899e+308":2.3665917855177267e+307,"1.0187119146299378e+308":595,"2.1878770515065988e+307":"r","bP":""}
argument4 = {"714":122}
return a-b*c/d
};
var argument3 = null;
var argument4 = null;
var argument5 = true;
var argument6 = 49;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = true
base_2[2] = false
argument7[655] = 705
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = "'"
return a/b+c+d
};
var argument10 = {"R":2.1985352069303846e+307,"1.1995184847085822e+308":49,"e@b":"l","'4dc+?o":1.669403845757894e+308};
var base_0 = ["ax","a","4i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ax","a","4i"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ax","a","4i"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ax","a","4i"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test688.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)