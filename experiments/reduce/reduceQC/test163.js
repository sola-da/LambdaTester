





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [true,true,null,true]; };
var argument2 = 2.423513680850988e+306;
var argument3 = {"460":705,"":9.673192719143634e+307,"6.386761740394484e+307":"","S":4.1385329952660344e+307};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 19.246747183291603; };
var argument5 = null;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 47.02130634154544; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 56.51400649469247; };
var argument9 = true;
var base_0 = [607,607,783,460,242,893,823,100,607,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,607,783,460,242,893,823,100,607,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,607,783,460,242,893,823,100,607,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)