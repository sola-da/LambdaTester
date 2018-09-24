





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["%",">}iC","c@","t","@","z49e","Q",";","5"]
argument3[4] = true
base_0[1] = 1.5972062997143998e+308
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.3156198695370476e+307] = {"":1.2181754551682213e+308,"-1":"B10"}
argument3[3] = {"":"P","j(":"6"}
base_1['length'] = ""
return a-b*c
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "'"
return a-b+c
};
var argument6 = r_1;
var argument7 = [893];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = false
argument8[2] = {"8":607,"8.993628619226897e+307":"","1.5812987799998234e+308":"","8.834170183311684e+306":"","":"`G","8.496233802760334e+307":25,"1.6584856679665493e+308":1.3338410748553463e+308,"s":655,"6.18496137398347e+307":1.3948486707246231e+308,"C":"d"}
base_3 = {}
return a-b*c
};
var argument9 = true;
var argument10 = null;
var base_0 = ["%","4"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","4"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","4"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","4"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)