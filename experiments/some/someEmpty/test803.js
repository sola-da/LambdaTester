





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = "";
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = true;
var argument7 = 705;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = false;
var argument10 = {"9.276128693106102e+307":8.986242296863679e+307,"1.2320466294413898e+308":-100,"3.100469342233111e+307":5.12316390416774e+307};
var base_0 = [843,618,607,0,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,618,607,0,242]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,618,607,0,242]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,618,607,0,242]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test803.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)