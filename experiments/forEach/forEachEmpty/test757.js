





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"0":"","7":"","49":"%;c","843":"TeN<W","":"","3.2727391256826944e+307":5.679312903124451e+307,"1.7976931348623157e+308":"`Un","1.6956082207297743e+308":"lh","UU":-1,"2.955397749835582e+307":"$5W"};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = r_1;
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = "";
var argument8 = r_1;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = true;
var argument11 = r_0;
var base_0 = [25,242,655,595,618,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242,655,595,618,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,242,655,595,618,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,242,655,595,618,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test757.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)