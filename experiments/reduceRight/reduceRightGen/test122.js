





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument3['!j'] = "GeRv#"
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['w'] = 25
return a-b*c-d
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = ""
argument6[0] = "Y"
argument7[0] = null
return a+b+c/d
};
var argument6 = "=5";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = "J"
argument10[2] = {"1.3847863387381484e+308":""}
return a-b/c+d
};
var base_0 = ["WDR%","Tr0","Y","j3b","Pq#","U8"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["WDR%","Tr0","Y","j3b","Pq#","U8"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["WDR%","Tr0","Y","j3b","Pq#","U8"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["WDR%","Tr0","Y","j3b","Pq#","U8"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)