





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"157":5.976182138529715e+307,"6.535366459651043e+307":1.7976931348623157e+308," ":">","-^":"K","FuR":"df","1.6084703744001822e+308":823}
argument2 = 82
return a*b-c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = false
argument5['!j'] = 59
return a*b*c-d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"":""}
base_2[7] = "^"
return a*b+c+d
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
base_3[1] = ""
return a-b/c-d
};
var base_0 = ["4SW","qF%","V","u","w","U","9","Ds="]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4SW","qF%","V","u","w","U","9","Ds="]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4SW","qF%","V","u","w","U","9","Ds="]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4SW","qF%","V","u","w","U","9","Ds="]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)