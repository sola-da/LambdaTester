





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ["9l","kF_D0N","]5:","9=","`","A","f","1","yS1*e"]
return a-b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = {"3.187457089268928e+306":1.4351751216318206e+308}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = true
argument6[893] = [0,823,1.7976931348623157e+308]
return a/b-c
};
var argument6 = {"714":6.058128343405468e+307,"":843,"5e-324":403,"1.5788685125056466e+308":1.1102643165145666e+308,"^fH":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = {"893":"f","to":7.013313549538239e+307,"8.538943616501691e+305":6.33278960238512e+307,"":"","5.009845743866708e+307":""}
return a*b+c
};
var argument8 = null;
var argument9 = 1.0696602392703279e+308;
var base_0 = [714,0,969,82,242,823,0,0]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,0,969,82,242,823,0,0]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,0,969,82,242,823,0,0]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,0,969,82,242,823,0,0]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)