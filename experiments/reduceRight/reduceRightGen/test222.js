





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = false
return a/b-c/d
};
var argument2 = true;
var argument3 = {"25":"GJ","":655,"1.530992591591799e+308":8.028553293091058e+307,"w":"!,'!|2","^7":5.687793573896889e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = ["3G","J","|GR","?","Y","ju`R","_H",";p","9"]
return a+b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['v'] = 460
argument6[2] = "i|"
argument6[25] = null
return a-b/c*d
};
var argument6 = 5.761511465916262e+307;
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = ""
argument10[2] = "@"
return a/b*c*d
};
var argument9 = [783];
var base_0 = ["({[*a ","c","Q","*x","SE!dW","$@","W","^O","B)"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["({[*a ","c","Q","*x","SE!dW","$@","W","^O","B)"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["({[*a ","c","Q","*x","SE!dW","$@","W","^O","B)"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["({[*a ","c","Q","*x","SE!dW","$@","W","^O","B)"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test222.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)