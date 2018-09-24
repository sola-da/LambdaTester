





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [49,893,242,893,49,-1,126,460,100]
base_0['length'] = {"59":1.5267854525602666e+308,"213":49,"":""}
return a*b-c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['^N'] = true
argument5[0] = null
return a*b*c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"705":714,"":"T","G":1.8120180085002136e+307,"1.4506877547765539e+308":"Q{","7.361484079423645e+307":403,"2.208461208739234e+307":""}
return a*b/c/d
};
var argument5 = 7.911549049446629e+307;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
argument8[2] = 1.2599553388218752e+308
return a-b*c-d
};
var argument7 = [969,1.7976931348623157e+308];
var argument8 = r_1;
var base_0 = [403,843,242,0,823,25,242,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,843,242,0,823,25,242,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,843,242,0,823,25,242,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,843,242,0,823,25,242,823]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)