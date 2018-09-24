





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = {"460":1.7061364217676174e+308,"655":823,"705":4.818095222587679e+307,"j":460,"A@":"","L&":"","":"","R":"Ph","5.362488874677401e+307":1.5537814239585961e+308,"7k":""}
return a-b/c
};
var argument2 = "3y,w4nw,S";
var argument3 = "y";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
argument6 = ["bRYdV","d","o","c","Iw","Q,","qv","-I","Hy@:"]
base_1[6] = "&"
return a-b/c
};
var argument5 = {"213":595,"6.718088363863973e+307":607,"(":"","1.5223450951914107e+308":"","1.3324462898307872e+308":4.954313406261136e+307,")+":59};
var argument6 = ["L","a","*8F+>","m","3","2","L!","64f","cWU","8E"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = {"714":"Cb","783":783,"893":3.711776907794913e+307,"8.620765067641677e+307":"","1.5385270809639036e+308":""}
argument8[126] = null
return a/b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.4034744228995816e+308] = 1.7976931348623157e+308
return a*b-c
};
var argument9 = "S";
var argument10 = [705,":","k",242,25];
var base_0 = [242,49,122,783,655,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,49,122,783,655,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,49,122,783,655,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,49,122,783,655,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)