





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = null
argument2[3.286160553564105e+307] = [100]
base_0[6][2] = null
return a*b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['T'] = 7.86725452215194e+307
argument4['!j'] = ["#","g:f"]
base_1[7] = ""
return a/b*c*d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"6":"a","242":"`","893":"","=":"","":157,"b":"g","1.7441284281338134e+308":157,"1.7382864098205917e+308":""}
argument5[1.1207829086460726e+308] = true
argument5[6] = [595,823,25,0,969,157,100,705,618]
return a-b*c+d
};
var argument5 = true;
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[82] = ["F3","_","p","?*Uc","l","Wjj","QP"]
base_3[1][2] = {"122":"","403":"","":"","LTt":"]","1.5588920829752498e+308":242,"1.0220629341512104e+308":126}
return a/b+c-d
};
var base_0 = [705,403,157,1.7976931348623157e+308,969,607,655,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,157,1.7976931348623157e+308,969,607,655,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,157,1.7976931348623157e+308,969,607,655,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,157,1.7976931348623157e+308,969,607,655,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)