





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.0500354979187844e+308] = [823,126,82]
return a*b*c
};
var argument2 = r_0;
var argument3 = 242;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f-d'] = 714
argument6[4.953791384496108e+307] = [403,1.7976931348623157e+308,-100,82,100,-1,893,403]
return a+b/c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = {"213":1.0808761203730836e+308,"705":",':D*1c","Xa*h":-1,"":"","9.155631398529232e+307":59}
base_2[3][7] = true
return a+b/c
};
var argument8 = true;
var argument9 = "";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[783] = ""
argument11['j'] = 1.2050654288695193e+307
base_3[1][6] = ["K#`w","5#C#D"]
return a/b+c
};
var argument11 = true;
var argument12 = true;
var base_0 = [714,1.7976931348623157e+308,"okoB",122,",","yM",-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,1.7976931348623157e+308,"okoB",122,",","yM",-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,1.7976931348623157e+308,"okoB",122,",","yM",-100]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,1.7976931348623157e+308,"okoB",122,",","yM",-100]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)