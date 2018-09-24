





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ";{"
argument2['w'] = 49
argument2[1] = {"f":"T","1.1814734748790188e+307":82,"":"","e":1.6478496897189824e+308}
return a*b-c/d
};
var argument2 = ["n","]","(","z","M","R","_%","4"];
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"714":1.7245637343978534e+308,"":"${H,N","5.878866558346786e+306":"","-100":213}
argument6['T'] = null
return a-b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 1.074321284328661e+308
argument7[6] = "q^J<"
return a-b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"460":"-","893":1.3562076857143314e+308,"z":0,"":"","5.788939132299474e+307":"A","F":49}
return a*b/c+d
};
var base_0 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test214.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)