





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0546776681946723e+308] = [655,126,460,893,618,213,100]
argument3[5.262931091360336e+307] = 1.5147071336087048e+308
base_0[4][2] = {"4":242,"242":627,"705":"","893":"","hp":1.1988505958519488e+308,"*":6.94853821693482e+306,"1.3482168113861135e+308":"H","1.4260287255114582e+308":"","w;&!;h[":-1}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7121211182125595e+308] = [595,"{","Ca",618,627,"!v",607,618]
argument3[7] = "}"
return a*b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = {}
return a+b/c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = false
base_3[4] = {"2":-100,"":1.2892492850027393e+308,"$":"","6.239069722890355e+307":"","4.4149715489423146e+307":"",";":-100,"9.951251840158961e+306":"w","9.62309851839545e+307":1.420705846277439e+308,"1.8762066557256368e+307":8.00988107842757e+307}
return a-b-c
};
var argument8 = {"=":618,"(":""};
var argument9 = "a!";
var base_0 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test693.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)