





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"242":"r","783":"h*","":"","1.0325117097960891e+308":403,"9.619841103634622e+307":4.538654082067886e+307,"1.4688501108681803e+308":157,")":"","6.52671187274092e+307":",1"}
base_0[3][1.7261030733891165e+308] = ""
base_0[9] = false
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = [607,157]
return a-b+c
};
var argument4 = 49;
var argument5 = {"213":"","":1.3721635350446775e+308,"f":7.550670353815108e+307,"5.173620808815821e+306":"","OF&5":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"0":"]d","126":"","213":4.809318917038227e+307,"607":"?","Qk":"","i":1.3835548322074944e+308," ":126}
return a*b-c
};
var argument7 = 1.0219656018479895e+308;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = null
argument11[3] = 7.287345696250754e+307
return a*b+c
};
var base_0 = ["u",783,618,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u",783,618,627]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u",783,618,627]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u",783,618,627]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)