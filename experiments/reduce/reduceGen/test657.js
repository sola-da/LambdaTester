





var callbackArguments = [];
var argument1 = {"126":"4","":"","b":"","6.053231096040808e+307":";(","1.187444591519205e+307":"","P":"","1.3141052446997098e+308":213,"R":"vd","AyA":"6","3.228501890899884e+307":618};
var argument2 = true;
var argument3 = ["E","Q","]","NnV"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = null
return a+b+c+d
};
var argument5 = null;
var argument6 = true;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ""
argument7[1.3938918493123786e+308] = null
return a+b*c*d
};
var argument9 = true;
var argument10 = null;
var argument11 = "b";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.1869172855352885e+307] = true
argument11[403] = ""
argument9[4] = 403
return a+b*c-d
};
var argument13 = "";
var argument14 = null;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['HMm'] = {"59":1.2663562704514835e+308,"403":5.640095008179343e+307,"627":783,"705":"","":823,"e":"<","1.7438396071978896e+308":",","1.2409377008756694e+308":1.3056763986702034e+308,"$CN{":403,"O":"YA0"}
argument14[2] = true
return a/b-c+d
};
var base_0 = ["i","N","n"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","N","n"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","N","n"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","N","n"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)