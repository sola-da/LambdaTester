





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = {"1.1713518857996655e+308":122,"5.4035707770387676e+306":893};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = r_0;
var argument6 = {"2":"","^":100,"":8.666384305289348e+307,"r'8":""};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = r_1;
var argument9 = true;
var argument10 = function callback(){callbackArguments.push(arguments)};
var base_0 = [783,82,783,714,-1,122,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,82,783,714,-1,122,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,82,783,714,-1,122,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,82,783,714,-1,122,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test62.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)