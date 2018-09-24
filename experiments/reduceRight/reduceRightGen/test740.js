





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 5.854425570769262e+307
argument1[1] = null
argument2 = true
return a/b-c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8.108492555774111e+307] = [5e-324,157,59,627]
argument3[8.575765443877852e+307] = ""
base_1[9] = 1.7976931348623157e+308
return a*b-c+d
};
var argument3 = null;
var argument4 = 1.7976931348623157e+308;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = 157
return a*b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = false
return a*b/c*d
};
var argument7 = null;
var base_0 = ["8Gb","mKo",618,"2B",627,607,242,"Z|Ki9-I}",893,"p"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8Gb","mKo",618,"2B",627,607,242,"Z|Ki9-I}",893,"p"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8Gb","mKo",618,"2B",627,607,242,"Z|Ki9-I}",893,"p"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8Gb","mKo",618,"2B",627,607,242,"Z|Ki9-I}",893,"p"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)