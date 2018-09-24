





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
return a/b/c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = "?^"
argument5[0] = ""
base_1 = [")X",126,"#","!{",403,"|0u",-1,"8V!S`z","I"]
return a+b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['j'] = 1.085003952795815e+308
base_2[1][0] = ""
return a+b-c
};
var argument7 = false;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"213":"","1.064798019728008e+308":2.7234031340068633e+307,"":"","1.0225273883850756e+307":823,"2.5786214891253027e+306":"","8.270185654990718e+307":"","3.610564262998381e+307":"","1.075831651466777e+308":1.378935062381979e+307,"3.342564581346502e+306":""}
base_3[4] = ["A","u`","p","r","JFT=`Dn","G","8rI","y","T1ZR"]
base_3[0][2] = {}
return a*b/c
};
var base_0 = ["*Q","y","buc","@","R","4?AG","M"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*Q","y","buc","@","R","4?AG","M"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*Q","y","buc","@","R","4?AG","M"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*Q","y","buc","@","R","4?AG","M"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test523.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)