





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"7.819541644923811e+307":460,"c":595,"b":59,"":705,"C":2.090845542224811e+307}
argument3[126] = {"969":"Y","Z":4.4933286215940074e+307,"":618,"-":1.555483677233843e+308}
argument3[4] = 6.811435173892532e+307
return a*b/c+d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['K'] = 6.508986062961605e+306
argument4[8.575765443877852e+307] = "]"
return a+b-c/d
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = [126,969]
argument8[4] = {"627":5.087495193218676e+307,"714":"","893":"","":1.196123517945067e+307,"5e-324":823,"%W:":"0A=GrR","x":"v"}
argument7[8.575765443877852e+307] = ""
return a*b-c+d
};
var argument7 = false;
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][2] = null
return a*b-c*d
};
var argument10 = null;
var argument11 = {"655":"","714":"xI","":607,"-1":655,"1.6713284295030543e+308":7.761789459747812e+307,"cGR":"","&":82};
var base_0 = [460,460,0,618,"U",655,655,"k#2","pt","*"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,460,0,618,"U",655,655,"k#2","pt","*"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,460,0,618,"U",655,655,"k#2","pt","*"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,460,0,618,"U",655,655,"k#2","pt","*"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test223.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)