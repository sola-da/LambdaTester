





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
return a/b-c
};
var argument2 = 157;
var argument3 = "q";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"":0,"n^":"ua","m":-100,"W":49,"Z":607,"3.1130204135536605e+307":4.813859200002671e+307}
return a/b+c
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
argument8[8.748669805137695e+307] = {"595":1.560235922946919e+308,"607":1.232603156594973e+308,"3.85602508612402e+307":714,"1.4142841434234782e+308":893,"":"-> O","q":"[","1.7272414034960238e+308":"","1.0358930292267763e+308":403}
return a/b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = {"13":25,"403":"","":0,"6.989287578717853e+307":"",")":"["}
argument9[3.0481490052276395e+306] = ["rLk8","&$J","ny","BiO","A","u","wB","ay","N|","lJ"]
argument10[0] = "gQIsN"
return a+b*c
};
var base_0 = [122,823,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,823,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,823,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,823,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)