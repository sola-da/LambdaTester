





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
return a+b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[126] = {"242":1.6792350859086584e+308,"@0":893,"8.571143151418339e+307":"","T^":618,"":7.681956152105867e+307,"8.33302299669938e+307":705}
argument4[5] = {"82":"","705":618,"*":""}
argument4[3] = true
return a+b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = {"5":607,"705":-100,"783":"QR","4.848735789634379e+307":6.759533735034974e+307,"-1":1.5095776646904534e+307,"9.404298730558637e+307":"","1.2740732633592906e+308":157,"9.051278051201677e+307":"F]"}
return a-b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1207829086460726e+308] = [157,403,969,100,-1,783,893]
return a+b-c-d
};
var argument5 = [969,783,122];
var base_0 = [823,-1,"e8q(6b","?",595,"]",607,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-1,"e8q(6b","?",595,"]",607,-100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,"e8q(6b","?",595,"]",607,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-1,"e8q(6b","?",595,"]",607,-100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test651.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)