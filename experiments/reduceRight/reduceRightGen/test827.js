





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = null
base_0[9] = {"823":100,"-100":1.0186691960144145e+308,"":4.0776225717014754e+307}
return a-b*c/d
};
var argument2 = ["_3OP",",","4","MX","AL]","5","V%0","w"];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
base_1[4][1.7976931348623157e+308] = 4.4470304952906795e+307
argument5[100] = [969,893,969,843,607]
return a*b*c+d
};
var argument5 = null;
var argument6 = "|LX!H";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.4250811791542279e+308] = ""
argument8[627] = true
base_2[0] = 4.423157222968688e+307
return a*b/c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
return a+b+c+d
};
var base_0 = [82,460,1.7976931348623157e+308,969,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,460,1.7976931348623157e+308,969,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,460,1.7976931348623157e+308,969,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,460,1.7976931348623157e+308,969,823]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)