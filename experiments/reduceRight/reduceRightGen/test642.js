





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"0":"p","59":1.605833651848411e+308,"403":783,"783":"Etdfp","893":9.415382677748763e+307,"Q*Z!;":242,"D":157,"":25,"-1":""}
return a*b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.286160553564105e+307] = true
return a-b+c+d
};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = [460,5e-324,1.7976931348623157e+308,126,627,-1,59,714,893,783]
argument6[7] = {"":"","-100":""}
return a-b*c-d
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"1":";","242":9.905633729664501e+307,"893":"","969":"","5e-324":"'X","":"","M":"","1.3963859876631449e+308":8.164041119564798e+307,"1.7209918543711752e+308":"j"}
argument8['F2nCX>6'] = ""
argument8[8.575765443877852e+307] = [242,-100,59,242]
return a-b/c+d
};
var argument8 = r_3;
var base_0 = ["Ha","k","na","%","=|","K","T","y&7","^"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ha","k","na","%","=|","K","T","y&7","^"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ha","k","na","%","=|","K","T","y&7","^"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ha","k","na","%","=|","K","T","y&7","^"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)