





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -65; };
var argument2 = true;
var argument3 = {"25":843,"618":893,"":"","1.6044158552117795e+308":49,"8.597811710478817e+307":823};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["&[{","}","Ov|","Hn","f","cQ","t","U{"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&[{","}","Ov|","Hn","f","cQ","t","U{"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&[{","}","Ov|","Hn","f","cQ","t","U{"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&[{","}","Ov|","Hn","f","cQ","t","U{"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)