





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,"+",null,[-0.48408823819271984],null]; };
var argument2 = true;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = {"403":1.545499818989827e+308,"627":"N","":"c`"," ":1.7976931348623157e+308,"-1":403,"p] ":6.090480675172689e+306};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 47.44752256714864; };
var argument7 = {"627":5e-324,"J":"1'D1","w":"","1.4710639731813164e+308":"]4!?,","pF":460,"-2b":""};
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument10 = ["$","{","j",-100,783,403];
var argument11 = true;
var base_0 = [-1,969,823,655,607,627,59,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,969,823,655,607,627,59,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,969,823,655,607,627,59,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test912.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)