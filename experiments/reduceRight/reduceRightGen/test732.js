





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = 2.815990881922488e+307
argument3[655] = "wWE+"
argument2[9.624051682326797e+306] = true
return a+b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
argument3[1.921533274132203e+307] = {"49":"","893":"OA^!","1.5095021464735717e+308":-1,"8.596268751789693e+307":",]","G":"","1.2161914773513516e+308":1.7976931348623157e+308,"":""}
return a*b-c+d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = ",a"
argument5[82] = [25,122,618,157,460,460,783,25]
argument6[-1] = null
return a+b+c/d
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = [213,893]
return a+b-c+d
};
var base_0 = [627,49,607,627,213,5e-324,1.7976931348623157e+308,843,-1,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,607,627,213,5e-324,1.7976931348623157e+308,843,-1,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,607,627,213,5e-324,1.7976931348623157e+308,843,-1,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,607,627,213,5e-324,1.7976931348623157e+308,843,-1,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test732.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)