





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = ["`2",823,"8s3-","S",460,"q",705,-100,"k"];
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = true;
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = 1.5777088462947528e+308;
var base_0 = ["2h3","W","g","nq","m","4","C40"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2h3","W","g","nq","m","4","C40"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2h3","W","g","nq","m","4","C40"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2h3","W","g","nq","m","4","C40"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test527.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)