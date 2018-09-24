





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = ""
argument2[627] = "$=zp"
argument2[8.748669805137695e+307] = {"59":"H","627":8.353356233632349e+307,"655":"L","{":655,"1.1259993326640715e+308":"yU","1.9291455605205584e+306":1.313643781914713e+307,"5.613146592542578e+307":6.759303491753559e+307,"_":1.6262749568691224e+305}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = "v"
argument3 = "wlPiAWPl"
argument3[5] = ""
return a*b*c
};
var argument3 = 100;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"49":25,"783":"[;r","Iuo}":607,"":"Io","1.7167784435133103e+308":"","7.036808995769047e+307":"8G"}
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = {"460":"","byyl":3.167073438521337e+307,"1.0204779945083896e+308":"^","1.781602721061369e+308":"","5.221005931540078e+307":"WLx","<":""}
argument7[1.0500354979187844e+308] = true
base_3[1] = {"59":"R","Z&":783,"vh[_":1.7976931348623157e+308,"":"","2.6808572565813255e+307":"h","Q":618," y]":607,"1.0708030633719312e+308":1.0217356273296604e+308}
return a+b+c
};
var argument7 = true;
var argument8 = false;
var base_0 = [714,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,705]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test67.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)