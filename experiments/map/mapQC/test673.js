





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -58; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"|Ùk)\u0011úî":0.7020433789812444,"¹í9\rIfBÇ":true,"|D":-3,"òçò\tÊ^":false,"¡V\u0018ÎNÇÏ":12,"¤Òj":-5,"Âª\r®ÕS±}":14}; };
var argument3 = [-100,126,"}4","=","%",";","Y7",969,-100,"b<"];
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument6 = "L";
var argument7 = {"":"","%nT":8.420886759100241e+307," $%%":"u","1.5760183675978635e+308":3.733924320095298e+307,"@":823,"1.118827279977006e+308":"","UWm(":"6_","3.805391123024174e+307":823};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = r_0;
var base_0 = [1.7976931348623157e+308,655,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test673.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)