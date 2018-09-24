





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = "bzmvvx"
argument2[705] = null
return a+b-c+d
};
var argument2 = "6X";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['y'] = {"":655,"4.925882031110649e+307":"t","L^L":627,"{9MuZ":"+","HGoqoZ`s#":"pN+"}
argument4[2] = null
return a+b*c*d
};
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['{S'] = ""
base_2[4] = 242
return a*b-c+d
};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 49
argument9[3] = {"607":655,"":25,"1.6127136192149104e+308":1.0534412691886433e+308,"1.7976931348623157e+308":-1,"1.2064897870296787e+308":1.4461548509955593e+308,"8.86556574184552e+307":1.4752747962224758e+308,"3.953453840631241e+307":9.701436632129694e+306,"9.535597330255997e+305":""}
return a/b/c+d
};
var argument9 = false;
var base_0 = ["J","V",0,242,"YP"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","V",0,242,"YP"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","V",0,242,"YP"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","V",0,242,"YP"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)