





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"969":9.479467245673807e+307,"M":"u'","":"Pdp","N^9>t<u25":1.0436550389996668e+308,"s":9.044770694874997e+307,"^":1.5659776881421242e+308}
argument2[4] = ["`{","-","%+lp","a0)"]
argument3[-100] = "t"
return a+b*c
};
var argument2 = ["T","D","EK"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
argument6[1.4034744228995816e+308] = ["V",49,"a6Y ",25,82,"UQ",0,"Z2","t","t}"]
return a-b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 5.941429298060972e+307
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['!cck7Mm'] = 1.7793298428220771e+308
return a-b+c
};
var argument8 = true;
var argument9 = {"1.0196370698342615e+308":"","1.4255485322298249e+308":"t"};
var base_0 = [655,-100,"c|^m{Kl"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-100,"c|^m{Kl"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-100,"c|^m{Kl"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-100,"c|^m{Kl"]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)