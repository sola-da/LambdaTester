





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = false;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = {"618":"L","714":"X","":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = null;
var base_0 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m=r_","Dn","5X","W[","|(}",";","1","y{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)