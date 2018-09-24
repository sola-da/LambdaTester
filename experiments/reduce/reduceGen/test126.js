





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = {"242":8.350344321215067e+307,"714":"","783":122,"1.312948168388015e+308":5.295768566459784e+307,"q":1.5472632292957326e+308,"6.108083771579453e+307":"uX","8.749676224902249e+307":"","3.533981808651601e+307":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = null
argument6[2] = "e"
return a+b+c/d
};
var argument6 = r_1;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = true
argument7[7.463432409233234e+307] = null
return a/b*c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = [714,403,-1,-100]
base_3[0] = null
return a*b*c+d
};
var base_0 = [-100,"|",705,"EC"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"|",705,"EC"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,"|",705,"EC"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,"|",705,"EC"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)