





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = [122,618,1.7976931348623157e+308,-100,893,618,49,157];
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = "Ab";
var argument8 = "";
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_2;
var argument11 = ["c?:","Th","Hl","L","^","X","B","rj"];
var base_0 = [403,655,823,122,157,627,100,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)