





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = null
argument1[0] = 1.1088077463377711e+307
argument2[0] = {"-1":126,"%":"7=","":""}
return a+b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
argument2[1] = {"":157,"7.179164747405071e+307":1.7976931348623157e+308}
argument4['!j'] = false
return a*b*c*d
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"49":"v","82":2.9387717006492613e+307,"242":"ZH","403":-1,"969":714,"":403,"1.2685730715529694e+308":618,"1.5268839264433377e+308":7.336353300738181e+307,"zX#":"","1.0313521413407893e+308":100}
return a-b-c*d
};
var argument6 = {"618":6.168551368612603e+307,"oDO":3.034188390445991e+307,"_?_":3.0993516686509517e+307};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = [0,460,823,595,1.7976931348623157e+308]
return a+b-c/d
};
var argument9 = "";
var base_0 = ["HLj"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HLj"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HLj"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HLj"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test166.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)