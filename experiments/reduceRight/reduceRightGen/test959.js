





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][5] = ""
argument2[213] = 1.7976931348623157e+308
return a/b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['St'] = true
argument3[705] = null
argument3[627] = true
return a+b/c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = false
return a-b-c-d
};
var argument4 = ["z$","N","B]["];
var argument5 = 213;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 893
argument7[82] = ["b","i+!"]
base_3[2][1] = ""
return a*b*c/d
};
var base_0 = [100,403,627,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,627,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,403,627,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,627,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test959.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)