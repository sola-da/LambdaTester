





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"0":122,"705":"","893":"","%i":1.7976931348623157e+308,"1.0214536347212047e+308":59,"$":"","?":"5$I3","I":1.4990377250036247e+308,"Y":6.484003007595374e+307,"":""}
argument3[5] = "%"
argument2[893] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = null
argument3[1.9097830510613482e+307] = ",_("
return a-b-c
};
var argument3 = {"4.763839807155873e+307":"c>","":"","$=a)XN7":25,"W":"sa","8.887322355751651e+306":"m"};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6.148642213884202e+307] = {"157":"z","705":25,"C:":"H","1.0023084981610007e+308":607,"":4.228567245494589e+307}
argument6[3.3156198695370476e+307] = "Fu"
base_2['length'] = true
return a/b+c
};
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = {"213":1.3515214767431871e+308,"":969,"]dRM":5.62190264697256e+307,"z6|":5.901502003536656e+307,"1.2639542403678523e+308":5.654045807579015e+307,"6.596868061908005e+307":607,"5.355561351596987e+307":"","4.5413985262419993e+306":157}
base_3[3] = [";"]
return a/b*c
};
var argument9 = null;
var base_0 = ["e",969,714,783]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e",969,714,783]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e",969,714,783]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e",969,714,783]
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
require("fs").writeFileSync("./experiments/every/everyGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)