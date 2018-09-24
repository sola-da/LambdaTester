





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = 242
argument2['{S'] = null
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4250811791542279e+308] = null
argument3['y'] = 403
return a+b*c+d
};
var argument3 = [705,595,460,705,-1,1.7976931348623157e+308,655,403];
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
return a/b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = {"607":"Dh","783":1.5987466305035427e+308,"":"a","{I":969,"1.7976931348623157e+308":"","F":607,"1.4153640219167177e+307":"2v","XP":1.3804641591949939e+308}
return a*b-c-d
};
var base_0 = [823,"svUWN",213,-1,1.7976931348623157e+308,"=",627,"Q",157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"svUWN",213,-1,1.7976931348623157e+308,"=",627,"Q",157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"svUWN",213,-1,1.7976931348623157e+308,"=",627,"Q",157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"svUWN",213,-1,1.7976931348623157e+308,"=",627,"Q",157]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)