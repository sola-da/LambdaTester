





var callbackArguments = [];
var argument1 = [783,627,403];
var argument2 = true;
var argument3 = {"9":"","100":"J","2.848434505283816e+307":5.588817761098573e+307,"j":4.293057857859732e+307,"2.7945356949797757e+307":1.1252857230410694e+308,"":"(","Ha":714,"5.347943233844917e+307":"]","nC":"9"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"783":"","1.3764841950717926e+308":")g","":6.152421796974051e+307,"5.691502947481874e+307":"rQ","1.0045549439536978e+308":"r%","-100":1.7976931348623157e+308,"4E=":1.1334292329080375e+308}
argument2[8] = null
argument2[1.4205726959827606e+308] = 655
return a-b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [627,122,627,126,627,82,-100]
base_1[4] = 8.68112856840167e+307
return a/b+c/d
};
var argument6 = 7.48577233041638e+307;
var argument7 = 893;
var argument8 = false;
var argument9 = null;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = [-1,0,"h",618,618,126,893,"P","G","AD"]
argument8[126] = ["84","0=:d",";"]
return a+b*c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2.1869172855352885e+307] = {"122":3.493361254853484e+307,"969":"","y":25,"":122,"w,":9.970692668497956e+307}
argument13 = ":R@b"
return a*b-c-d
};
var argument13 = 6.225399091379425e+307;
var argument14 = [783,242,460,714,460,403];
var base_0 = ["u","Z!L","Y","^>","_i",",","u","AY",")_"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","Z!L","Y","^>","_i",",","u","AY",")_"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","Z!L","Y","^>","_i",",","u","AY",")_"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","Z!L","Y","^>","_i",",","u","AY",")_"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)