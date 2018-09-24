





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7394185942769049e+308] = null
argument2[1.4570946481947045e+308] = "4"
argument2['?'] = true
return a-b-c
};
var argument2 = true;
var argument3 = [969];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = [-100,607,893,5e-324,242]
argument5['7q('] = 59
return a-b*c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"100":1.2743434279508294e+308,"":100,"1.2826849794579375e+308":"4","4.1063585818362244e+307":"","4.369091448189436e+307":"","1.604629924344494e+308":"","1.5022133854168917e+308":"5K","{":"","c9":"","HE?^s":""}
return a/b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[969] = 9.369327696411912e+307
argument9[6] = {"213":"","242":"68","6.149697612448835e+306":3.798361872923289e+307,"-100":2.1953905343236552e+307,"1.1411453697609127e+308":"","'":1.7335491464262837e+308,"4.591541184711192e+307":"","1.496214024263841e+308":"#'"}
argument9[403] = {"1.935175089108572e+307":"%"}
return a/b*c
};
var argument9 = r_2;
var argument10 = {"8.336748355887613e+307":"","":242};
var base_0 = ["k^jE>"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k^jE>"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k^jE>"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k^jE>"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)