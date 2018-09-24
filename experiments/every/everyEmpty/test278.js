





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 893;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = r_1;
var argument5 = {"49":"","783":"","823":"","1.4642159869522408e+308":705,"8.375772733360172e+306":403,"E":"[b:G","QN":1.140536158143687e+308,"$":"","":49};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = "";
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = false;
var base_0 = ["t",":","C85","%b","P","Y7","r","an"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t",":","C85","%b","P","Y7","r","an"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t",":","C85","%b","P","Y7","r","an"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t",":","C85","%b","P","Y7","r","an"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test278.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)