





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"783":"","":1.4845159764575039e+308,"zsu=L":1.4611998308230543e+308,"7.060943761746867e+307":"%<t"};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = true;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = r_2;
var base_0 = [403,"*^v",403,-1,"&mRH"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"*^v",403,-1,"&mRH"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"*^v",403,-1,"&mRH"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"*^v",403,-1,"&mRH"]
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
require("fs").writeFileSync("./experiments/find/findEmpty/test225.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)