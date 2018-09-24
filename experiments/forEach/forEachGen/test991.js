





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = ["|iZ","y","-^c*","f4"]
return a/b*c
};
var argument2 = null;
var argument3 = [618,213,242,-100,59,969,242];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ["+","0","Y","u",";`","n","{Vak","|","H"]
base_1[7] = false
return a/b-c
};
var argument5 = r_1;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = ""
argument8[2] = 893
return a/b-c
};
var argument8 = {"":""};
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][4] = null
argument11[460][1.2658989034477382e+308] = true
return a*b/c
};
var argument11 = true;
var argument12 = null;
var base_0 = ["$",">KThC","C","xD","Xt","Ht","E","Q","J","1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$",">KThC","C","xD","Xt","Ht","E","Q","J","1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$",">KThC","C","xD","Xt","Ht","E","Q","J","1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$",">KThC","C","xD","Xt","Ht","E","Q","J","1"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test991.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)