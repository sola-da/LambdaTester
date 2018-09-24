





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = false
base_0[2][7] = null
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 783
argument4[403] = 9.684019945070182e+306
argument4[0] = {"213":82,"6.888473974711636e+307":"","9.54191680661319e+307":1.4894335659891693e+308,"5e-324":595,"{":1.0597151119087302e+308,"1.1520452862680246e+308":823,"5.643757891647357e+307":""}
return a-b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.3156198695370476e+307] = 126
return a/b/c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"1.3186787711859412e+308":705,"$V":"w","":7.565337673482484e+307,"`mUA":3.634788422839765e+307,"1.2293960853138824e+308":"","k":""}
base_3['length'] = 2.810029874610382e+307
return a/b+c
};
var argument8 = null;
var base_0 = [100,0,157,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,157,122]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,157,122]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,157,122]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test180.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)