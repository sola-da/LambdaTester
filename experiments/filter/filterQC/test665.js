





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = {"618":"L","714":"X","":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 62.893292165042936; };
var argument6 = null;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = null;
var base_0 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)