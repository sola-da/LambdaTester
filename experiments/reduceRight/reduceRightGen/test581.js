





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"59":1.4314691983929556e+308,"4.111677677620634e+307":6.838146455194479e+307,"`":"","":59}
argument2[705] = "D%"
return a-b*c/d
};
var argument2 = ["n","4","E",";","Qz","&"];
var argument3 = "A";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = true
return a+b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = {"460":3.940745630835119e+307,"655":"","893":969,"969":1.4807338839617702e+308,")":"Z","":714,"a":893,"6.436951350430323e+307":213}
argument6['K'] = [969,823,607,655,"x","p+","6","D"]
argument7[6] = [969]
return a+b*c+d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = "'e"
return a+b+c-d
};
var argument8 = false;
var base_0 = [100,618,655,618,49,157,823,843]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,618,655,618,49,157,823,843]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,618,655,618,49,157,823,843]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,618,655,618,49,157,823,843]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)