





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 618;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = "kO";
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = false;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = 25;
var base_0 = [607,705,618,157,783,25,100,969,242,403]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,705,618,157,783,25,100,969,242,403]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,705,618,157,783,25,100,969,242,403]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,705,618,157,783,25,100,969,242,403]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test570.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)