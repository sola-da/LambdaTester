





var callbackArguments = [];
var argument1 = false;
var argument2 = 2.6531619836529276e+307;
var argument3 = {"460":-100,"G":"1l","`oz":157,"":"T","1.4685288127619259e+308":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = {"595":"","u":1.351071706435026e+307,"3.075519300742029e+307":"`a","lh$y`":3.3209431911488963e+307,"mz^,":59,"D":100,"":"NP","Zl":"5"}
argument3[7.889879335222838e+307] = [82,213,157,49,59]
argument1[893] = [0,714,969,25,157,893,5e-324,893,-100]
return a/b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = "d4"
return a-b+c/d
};
var argument6 = false;
var argument7 = null;
var argument8 = false;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7.463432409233234e+307] = 8.3191483716595e+306
return a/b*c-d
};
var argument11 = null;
var argument12 = false;
var argument13 = r_1;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = true
argument13[4] = [",,f?","[V"]
return a-b*c+d
};
var base_0 = ["3","Q:C",595,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","Q:C",595,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","Q:C",595,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","Q:C",595,59]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)