





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = false
argument3[0] = ">`E'E%"
base_0[8] = null
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['y'] = "]"
argument4['!j'] = "="
return a*b*c/d
};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b-c-d
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
return a*b*c+d
};
var argument8 = r_3;
var base_0 = [-100,82,403,607,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,82,403,607,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,82,403,607,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,82,403,607,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test318.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)