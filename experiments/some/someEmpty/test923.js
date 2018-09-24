





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = [460,82,618,49,627,-100,242,607,823];
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = null;
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_2;
var argument11 = "N";
var base_0 = ["k;p6","i","=:4","s","1","I","6_","34E",",&","X"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k;p6","i","=:4","s","1","I","6_","34E",",&","X"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k;p6","i","=:4","s","1","I","6_","34E",",&","X"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k;p6","i","=:4","s","1","I","6_","34E",",&","X"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)