





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"82":"","1.7827145331524614e+307":"","1.3337217319391241e+308":"oe","-1":705,"":0,"Hc":460,"1.4625968505665207e+308":1.6556417924525626e+308,";":627}
return a*b*c
};
var argument2 = [969,82,714,0,25,213,25,59,-100];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"893":5.580362510199541e+307,"-":5.055661947856935e+307,"1.353019945122574e+307":"","3.7238091336632283e+307":"","":655,"1.0482505559629726e+308":607,"x":122}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = ""
return a-b*c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
argument8[6] = [627,-1,"q",213,969,-1,"E","oL"]
return a/b*c
};
var argument8 = 7.561226805118144e+307;
var argument9 = null;
var base_0 = [655,213,460,618,126]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,213,460,618,126]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,213,460,618,126]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,213,460,618,126]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)