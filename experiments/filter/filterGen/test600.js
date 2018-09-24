





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = false
argument3[0] = [100,5e-324,705,-100,-100,893]
base_0[8][3] = 122
return a+b/c
};
var argument2 = {"":1.6604679991731837e+308,"ns":"","7q(":157};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"655":"","1.0457494364965099e+308":5e-324,"":9.232409623477477e+307,"1.3283661704239626e+308":"","5.158336972433071e+307":"","5.554917056745569e+307":"","8.276781122731794e+307":")To'","6.098944487091467e+307":3.919766622245775e+307}
argument5[1.0546776681946723e+308] = "DN"
argument4[4.224481734419934e+307] = null
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.7847438319683965e+308] = ""
argument6[2] = [893,242,82,"!mWk","&"]
argument5['C'] = {"o":3.415561081996389e+307,"|X2":7.084992507539334e+307,"-100":6.181710796575795e+307}
return a*b*c
};
var argument5 = {"783":49,"843":"2","":595,"1.5930346224431764e+308":5.459674254979266e+307,"P&":"y","5.062647675476955e+307":157,"K?`":4.788154478797263e+307,"8.639664788900972e+307":""};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['A'] = 783
base_3[2] = ["mp",157,"f",595,460]
argument8[1.7121211182125595e+308] = {"82":"a[Qu","122":"","460":"","1[h":"{","8T":"","8th":"","":"4","3.4980026463472526e+306":783,"2.9427674006531924e+306":1.1117739039330244e+306}
return a-b-c
};
var argument8 = false;
var argument9 = "";
var base_0 = [126,714,607,893,783,893,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,714,607,893,783,893,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,714,607,893,783,893,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,714,607,893,783,893,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)