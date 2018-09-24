





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = false
argument2[4] = {"2":"rt","460":"s*","595":655,"823":"s`daf(","8.816301423165657e+307":5.546034750372951e+307,"":"","7.856101087996508e+307":8.237156392893926e+307,"2.597744325527853e+307":"","1.6298936253141458e+308":"kR","I":1.2023852948999127e+308}
base_0[0][0] = null
return a/b-c-d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ""
return a*b+c+d
};
var argument4 = null;
var argument5 = {"595":"","7.025378399392153e+307":"?yJ4","":4.065953143384003e+306};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"213":"W","1.250581329921763e+308":1.185843629804185e+308}
argument8[1.4250811791542279e+308] = 6.539746130700866e+307
return a/b*c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.1207829086460726e+308] = null
return a*b+c/d
};
var argument8 = r_3;
var argument9 = false;
var base_0 = [-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)