





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = [-100]
base_0[7] = {"100":607,"783":"e","d":1.2334421523171471e+308,"":2.9589662686909037e+307,"1.5049551425131912e+308":1.0671848557454943e+308,"1.3465430909758337e+308":-1}
base_0[7] = {"607":"","":655,"c":"","Q":7.776257067157277e+307,"1.014470064063603e+308":9.05655961632288e+307,"C":213,"p`(":"o","1.2169959034319736e+308":1.4781653260810665e+308,"sEz":783,"v(:]qM?":""}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"1.730378519672129e+308":460,"S":6.755749559330096e+306,"":1.6860548031867815e+308,"9.871297342573397e+307":"cG","8.578050448327747e+307":"","[p":""}
return a*b/c
};
var argument3 = false;
var argument4 = "tb31";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = true
argument7[3.7154103611117224e+307] = 8.640370491307064e+306
base_2[1] = [893,100,705,403,969]
return a+b-c
};
var argument6 = [618,213];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [122]
argument9[4] = null
return a/b*c
};
var argument8 = null;
var argument9 = r_3;
var base_0 = ["G","+","l",893,0,"Z","d","Ah"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","+","l",893,0,"Z","d","Ah"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","+","l",893,0,"Z","d","Ah"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)