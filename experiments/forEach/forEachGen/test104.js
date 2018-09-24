





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"618":"","":"","1.3293569262246768e+308":"","X":"E[z","2.683239820892709e+306":"7E","&3":"","-100":""}
base_0[3] = 1.7047209277694951e+308
base_0[2] = 1.482615832733239e+307
return a+b-c
};
var argument2 = "";
var argument3 = "ZELX";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"4":"","460":3.874199023243916e+307,"":1.1248996306831618e+308,"1.601975045246623e+308":-100,"02e#":"[<-","4.049968248084327e+307":1.1512067836923834e+308,"W":"","1.7910706316470043e+308":1.4216650893847026e+308}
argument5[1] = {"100":"","783":49,"":"",",":"Y#","*F":0}
return a*b-c
};
var argument5 = null;
var argument6 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "-"
return a/b*c
};
var argument8 = null;
var argument9 = 1.983322576244075e+307;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ""
argument11[1] = {"5":1.1706688857958813e+308,"122":2.5350593773444405e+307,"893":"JN","|>":893,"":"pM","-100":"|","|":1.7876495787331064e+307,"9.316543297065427e+307":783,"1.005102947000259e+307":1.098635400235862e+308}
argument10[7.92397107964922e+307] = null
return a+b*c
};
var argument11 = r_1;
var argument12 = "";
var base_0 = ["1Nc$","j:ec","d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1Nc$","j:ec","d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1Nc$","j:ec","d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1Nc$","j:ec","d"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)