





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = "E";
var argument3 = 82;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "\n`6\u000b°"; };
var argument5 = 1.2065582027074417e+308;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 19.06058660352241; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"²I":"("}; };
var argument9 = ["@","US",618,";wH",157];
var argument10 = true;
var base_0 = ["GB","#XY","v4j:u5(N0t_zXJl","h"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GB","#XY","v4j:u5(N0t_zXJl","h"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GB","#XY","v4j:u5(N0t_zXJl","h"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GB","#XY","v4j:u5(N0t_zXJl","h"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)