





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ""
base_0[5] = 25
argument3 = null
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"59":2.339312815922433e+307,"242":"lr",",":"","":"E:wKj","e":"","@":"","1.3293569262246768e+308":""}
base_1[5] = ["Ph",618,618,100,"N%",705,"+7E",242]
base_1 = null
return a*b-c
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 1.482615832733239e+307
argument7[5] = ""
base_2[0][1.4677087964888306e+308] = "ZELX"
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = {"4":"","460":3.874199023243916e+307,"":1.1248996306831618e+308,"1.601975045246623e+308":-100,"02e#":"[<-","4.049968248084327e+307":1.1512067836923834e+308,"W":"","1.7910706316470043e+308":1.4216650893847026e+308}
base_3[1][7] = {"100":"","783":49,"":"",",":"Y#","*F":0}
return a*b-c
};
var argument8 = null;
var argument9 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"];
var base_0 = [823,"n",213,"$Fu@",25,"b",627,5e-324,"8a"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"n",213,"$Fu@",25,"b",627,5e-324,"8a"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)