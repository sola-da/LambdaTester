





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ""
argument2[2] = {"":157}
argument2[8.575765443877852e+307] = 4.108893583403376e+307
return a/b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = ["HM","7N",126,"!`rIn9KP",0,"Z","z*:","wc"]
return a/b+c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = true
argument4[627] = [-100,705,126,5e-324,403,893,242,714,893]
return a+b-c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][1.7976931348623157e+308] = null
base_3[4][1.7976931348623157e+308] = [100,627,618,82,627,59,0,843]
argument6[2] = {"7":"()","49":"","122":783,"403":1.0827914315957957e+308,"595":"nI","783":-1,"893":1.0435110596502797e+308,"u":-1,"":1.4082270455236423e+308}
return a/b+c+d
};
var argument5 = r_0;
var argument6 = r_0;
var base_0 = [618,126,460,783,100,1.7976931348623157e+308,82,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,126,460,783,100,1.7976931348623157e+308,82,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,126,460,783,100,1.7976931348623157e+308,82,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,126,460,783,100,1.7976931348623157e+308,82,25]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)