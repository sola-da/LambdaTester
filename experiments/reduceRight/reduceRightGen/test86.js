





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
return a-b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ""
base_1[3] = false
base_1[5] = null
return a*b*c*d
};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = 1.3201607182482045e+308
return a*b-c-d
};
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = {"0":"","5.469265873851155e+306":1.3921651655528982e+308,"e":843,"B;":""}
return a+b-c+d
};
var base_0 = ["2Nd!(",-100,-100,1.7976931348623157e+308,"B_",893,969,"*:V","@"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2Nd!(",-100,-100,1.7976931348623157e+308,"B_",893,969,"*:V","@"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2Nd!(",-100,-100,1.7976931348623157e+308,"B_",893,969,"*:V","@"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2Nd!(",-100,-100,1.7976931348623157e+308,"B_",893,969,"*:V","@"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)