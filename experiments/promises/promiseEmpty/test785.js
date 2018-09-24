/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = [1.7976931348623157e+308,714,893,49,823,126,607];
var argument3 = p1;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = ["U","AXxi","3r","@","T",")m-","{","aU","3","DC2DO"];
var argument6 = {"A":"","*":"tc"};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"9":5.967415330871946e+307,"126":7.802659908182823e+307,"460":"%","":1.6977214650074408e+308,"1.1906829607605013e+308":6.618851702148747e+307,"@":"","2.1869172855352885e+307":595,"2.277641977158732e+307":")","z":8.979613759924138e+307};
var argument9 = false;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = ["@w",403,100,242,25,242,"2",0,"7"];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test785.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)