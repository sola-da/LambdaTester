





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][1.7976931348623157e+308] = true
argument2[5] = {"242":-1,"655":1.6802980382828412e+307,"1.0709694670182599e+308":1.6479361311192935e+308,"":"{<Ua","3.24288912254094e+306":"9"}
return a-b/c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = null
base_1[2][2.819898637310108e+307] = true
return a-b/c*d
};
var argument4 = 8.467349719149352e+306;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['UU'] = true
base_2[6] = {"100":893,"714":"5","4.3827238711509515e+307":1.2652230436260715e+308,"":893}
argument6['w'] = 25
return a+b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['^N'] = ""
return a/b-c/d
};
var argument7 = "";
var base_0 = [-1,242,969,618,126,595,705,5e-324,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,242,969,618,126,595,705,5e-324,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,242,969,618,126,595,705,5e-324,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,242,969,618,126,595,705,5e-324,714]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)