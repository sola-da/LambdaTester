





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = false
argument2[0] = {"705":""}
base_0[1]['!cck7Mm'] = null
return a-b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
argument5['C'] = {"2":"","1.0936091531169893e+308":"","1.0935093030536988e+308":"X"}
return a+b*c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.0546776681946723e+308] = {"R":2.1985352069303846e+307,"1.1995184847085822e+308":49,"e@b":"l","'4dc+?o":1.669403845757894e+308}
argument9[1.0546776681946723e+308] = 1.221637134911504e+307
argument8[3.0481490052276395e+306] = null
return a+b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][1] = 714
argument9[-100] = false
return a*b*c
};
var base_0 = ["2","(r"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","(r"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","(r"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)