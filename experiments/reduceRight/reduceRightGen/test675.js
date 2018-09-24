





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = false
return a/b+c+d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
argument6[8] = [705,-1,714,460,595,-1,0,1.7976931348623157e+308,49]
argument6[2] = {"122":5.367247225904123e+307,"7v":"P`","J,U":1.197286939747644e+308,"":"","4.742098851863396e+307":5e-324,"1.5618695413331252e+308":9.785872767576926e+307}
return a+b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['L'] = ""
argument6[82] = "{I-*"
argument6[3.286160553564105e+307] = ""
return a+b+c-d
};
var argument6 = {"":1.0845733764214699e+308,"3.349689342145493e+307":6.04529720204161e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = false
return a+b*c/d
};
var base_0 = [",F","`n@)04",-1,"7"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",F","`n@)04",-1,"7"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",F","`n@)04",-1,"7"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",F","`n@)04",-1,"7"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test675.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)