





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = null
return a/b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"6":460,"126":2.6738324604435048e+306,"823":"","893":"PaG","pK":0,"":893,"^{":8.393216708082758e+307,"=":969}
argument2[1] = "@R"
argument3['{S'] = null
return a*b+c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = 3.4504347346251155e+307
argument5[2] = ["R"]
base_2['length'] = null
return a-b-c-d
};
var argument4 = {"595":49};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.8120440085202614e+307] = null
argument8[7] = 783
return a/b/c/d
};
var argument7 = r_3;
var argument8 = ["7","=*rJ","a","V","t%F><","Dn"];
var base_0 = ["yF9","kz","0","sq","$",",N)E]>"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yF9","kz","0","sq","$",",N)E]>"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yF9","kz","0","sq","$",",N)E]>"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yF9","kz","0","sq","$",",N)E]>"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)