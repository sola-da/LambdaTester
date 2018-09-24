





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 6.543476759137712; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 42.452156252618444; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "."; };
var argument4 = null;
var argument5 = {"157":59,"2.449245567738446e+307":"","":655,"1.661288223149329e+308":9.048929582594475e+307,"1.0064300495985859e+307":"-","1.1072290059904184e+307":5.701087099200098e+307,"1.4257664044573817e+308":8.522853779739655e+307,"<w":1.4425373051354813e+308,"1.7976931348623157e+308":1.610966140466973e+308};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 18; };
var argument7 = null;
var base_0 = [618,627,126,1.7976931348623157e+308,100,122,242,100,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,627,126,1.7976931348623157e+308,100,122,242,100,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,627,126,1.7976931348623157e+308,100,122,242,100,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,627,126,1.7976931348623157e+308,100,122,242,100,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)