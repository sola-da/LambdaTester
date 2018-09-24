





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = false;
var argument5 = {"0":655,"":"","-100":"F","e60":1.5757877411750442e+308,"?_8":7.678417932436577e+307};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"242":1.4210689857972175e+308,"607":823,"8.601513198486142e+307":893,"":9.630212157563758e+307,"3.9799820854720077e+307":"$",",'AF":5.345536249807961e+307};
var argument8 = {"100":1.7296169358978193e+308,"157":"","705":"","893":4.632480646451753e+307,"43c":100,"8.270896616260866e+307":"]w","1.3416259121428735e+307":1.1906204914095954e+308,"":213};
var base_0 = [157,49,5e-324,25,213,823,100,783,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,49,5e-324,25,213,823,100,783,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,49,5e-324,25,213,823,100,783,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterEmpty/test703.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)