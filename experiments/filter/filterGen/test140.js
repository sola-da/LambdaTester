





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
return a+b/c
};
var argument2 = false;
var argument3 = {"5":"","893":"","":2.407688456919495e+307,"{S":"","3.3895593153124537e+307":7.350834268796721e+307,"7.811234408455741e+307":"","1.2340687867778804e+308":"Je"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [595,843,213,-100,213,25,893,25,627]
base_1[5] = null
return a/b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ["i<","`D","M+4u","MmX","k]","B",">>9n"]
argument6[3.377960715099946e+307] = ["#","|",0,"H*D,"]
return a*b+c
};
var argument7 = "";
var argument8 = 1.0118076649279184e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-100] = null
argument10[3.0481490052276395e+306] = [714,-100,100,213]
base_3['length'] = null
return a/b+c
};
var argument10 = "+";
var base_0 = [1.7976931348623157e+308,122,25,618,655,403,1.7976931348623157e+308,100,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,122,25,618,655,403,1.7976931348623157e+308,100,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,122,25,618,655,403,1.7976931348623157e+308,100,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)