





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = null
argument2['f-d'] = false
argument2[1] = ""
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AA@'] = {"5":893,"100":0,"242":1.9434318954914397e+307,"969":"9:5","6.49484366320051e+307":"%*r6yc9#N","t":"5","(=*3":1.2295795801857768e+308,"%":8.296482330732406e+307}
base_1[6][4] = [";","U","s","5","oaF","<","uJH","t","n`Q;"]
argument3[1.0500354979187844e+308] = 157
return a/b*c
};
var argument3 = ["w","F","r","y","Y","q2>"];
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.7261030733891165e+308] = 1.5781437697862521e+308
argument6[0] = [82,618]
argument7[100] = true
return a/b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['LK'] = null
base_3[1] = {"9.380028343139351e+307":"zB"}
return a*b*c
};
var argument8 = [122,25,0,893,122,122,783,242,618];
var base_0 = [157,714,126,705,595,25,82,460,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,714,126,705,595,25,82,460,126]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,714,126,705,595,25,82,460,126]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,714,126,705,595,25,82,460,126]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test752.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)