





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"cr":403,"":1.585216297346642e+308}
argument1 = 607
argument2[1.4250811791542279e+308] = null
return a-b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ["S","@h","`z","J","u","6_#Y","#E","7"]
base_1[2][2] = {"157":823,"213":"t","460":1.4107081778750945e+308,"[":5e-324,"B":"","9.1389343283028e+307":1.0921586078282886e+308,"":25,"`":595,"1.7976931348623157e+308":"I"}
argument4[1] = false
return a-b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = 213
argument6['{S'] = true
return a-b-c-d
};
var argument6 = null;
var argument7 = 618;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"157":1.2127021827185871e+308,"":7.945608068006051e+307,"c":"b@J","4.733613093547207e+307":"E","1.7008978731861901e+308":"^","-1":"","9.28572000609292e+307":1.2748605592446915e+308}
argument9['F2nCX>6'] = [122,-1,618,242,100,59,82,49]
return a*b*c/d
};
var base_0 = ["ux","n","Zz","K","?","AMx"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ux","n","Zz","K","?","AMx"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ux","n","Zz","K","?","AMx"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ux","n","Zz","K","?","AMx"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)