





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 87; };
var argument3 = {"25":607,"-1":1.1525041022235092e+308,"2.7726464588851925e+307":-1,"'7":1.1963296259367247e+307,"k4":7.552104255138579e+307,"y":9.9225097829323e+307,"9.132688351252248e+307":714,"A":8.468332889840855e+307,"1.6366946720737281e+308":1.7976931348623157e+308};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 23.138329286342074; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -53.47419911053875; };
var base_0 = [714,"D7H",618,"i","@",714,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"D7H",618,"i","@",714,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"D7H",618,"i","@",714,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"D7H",618,"i","@",714,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)