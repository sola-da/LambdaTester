





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['St'] = false
argument2[1.921533274132203e+307] = null
return a/b/c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 4.760830493260403e+307
base_1[6] = true
return a+b*c-d
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [607,783,403,403,893]
return a+b/c*d
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[655] = 122
base_3[2][2.819898637310108e+307] = ["]d"]
base_3['length'] = true
return a/b/c-d
};
var argument10 = r_1;
var argument11 = true;
var base_0 = [-100,1.7976931348623157e+308,1.7976931348623157e+308,213,5e-324,823,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,1.7976931348623157e+308,1.7976931348623157e+308,213,5e-324,823,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,1.7976931348623157e+308,1.7976931348623157e+308,213,5e-324,823,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,1.7976931348623157e+308,1.7976931348623157e+308,213,5e-324,823,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)