/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = r_0;
var argument3 = "%";
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"Y":1.0682030165965163e+308,"1.1073410092684749e+308":1.2871558233328808e+308,"1.6975638337464941e+308":"","wIs":783,"":1.2908849489421809e+308,"(q]:":"","-Dv^":"","1.2390797318031166e+308":"A","_":""};
var argument6 = [-100,"&wO^t&",655,893,49,893,714,618,"(",242];
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = p2;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = [126,618,-100,843,627,403];
var argument11 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test690.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)