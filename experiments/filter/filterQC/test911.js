





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -11; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -2.374746720306309; };
var argument3 = {"6":0,"59":1.2081995496056183e+308,"100":"Xz","705":4.4901730719304224e+307,"":"","-100":59,"V":403};
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [false,-0.5153063378500036,1.0088784202766297,false,true,false,"N\u000bS]Í ",true]; };
var argument6 = "";
var argument7 = [969,823,122,403];
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 23; };
var argument9 = r_3;
var base_0 = [59,607,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,607,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test911.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)