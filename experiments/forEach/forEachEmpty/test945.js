





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = false;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = ["^","J","y","9k(@","WM73","DU="];
var argument5 = r_0;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"618":1.1238840522939776e+308,"4.0500757018696177e+307":"","":"","!g4":1.0771575138583462e+308,"1.2388897502938876e+307":"","Mc;":"<","3.255000546072635e+307":59,"_:$I":8.828944780330168e+306,"1.0580489873573128e+308":1.601888751249747e+308};
var argument8 = function callback(){callbackArguments.push(arguments)};
var base_0 = ["5","5","g",49,25,607,"<-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5","5","g",49,25,607,"<-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5","5","g",49,25,607,"<-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5","5","g",49,25,607,"<-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test945.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)