





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [-0.6636125717208206,true,null,1.2966532011420928,null]; };
var argument4 = [-1,0,618,122,893,1.7976931348623157e+308,655,969];
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "¿(\u001b"; };
var argument7 = {"4.0218546866791874e+307":618,",":"","":1.585340262681923e+308,"1.3525734672468675e+308":4.1249855321716053e+307,"Fn":9.518434361342049e+307};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = ["l","WG","Y","vH","r",")Sg-","-","I","d^2"];
var base_0 = [595,655,618,59,157,49,403,126,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,655,618,59,157,49,403,126,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,655,618,59,157,49,403,126,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)