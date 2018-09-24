





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = "@6"
return a/b*c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['w'] = 1.5245600411451274e+308
argument4['{S'] = {"595":1.4461126861331803e+308,"Ao]":100," u7":"","hQ":59,"":100,"26KdBh":"","5.594584924091458e+307":5.323991410450977e+307}
argument4['K'] = false
return a/b/c/d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"893":25,"":1.5414785107009474e+308," P":"","{:t":25,"rz":"!O@","2L(oh-%":1.6072952751237862e+308,"8.771719385017646e+307":"","eaS":1.7976931348623157e+308,"-1":1.5520724545491827e+308,"-D":4.204963797592348e+306}
return a-b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"":",6"}
base_3[4][1.7976931348623157e+308] = false
return a*b-c+d
};
var argument7 = r_3;
var base_0 = [655,157,595,714,157,82,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,595,714,157,82,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,595,714,157,82,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,595,714,157,82,460]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test781.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)