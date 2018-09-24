





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = ""
argument2[705] = null
base_0[2] = null
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"4.089204478215399e+307":"s","4.743880078838007e+307":157,"`:":"","T":"ui","":2.167449779662881e+307}
argument3[4] = false
return a*b-c
};
var argument3 = null;
var argument4 = 595;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = "2hU"
argument6[5] = ["x","<","80)Q|"]
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = [893,403,627,705,1.7976931348623157e+308,843,893,403,823,607]
argument7[4] = {"6":1.7976931348623157e+308,"E":1.2870422650913905e+308,"":""}
return a/b/c
};
var argument7 = r_3;
var argument8 = {"1.1756931231874504e+308":"","1.7865808734889036e+308":"","5`dIh$GGfKP":"","1.2216359577279031e+308":"","":1.2340687867778804e+308,"7.350834268796721e+307":"","2.407688456919495e+307":7.811234408455741e+307,"Je":"6"};
var base_0 = [783,"#J",59,403,"Cj0G=`","H4%","Xe"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"#J",59,403,"Cj0G=`","H4%","Xe"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"#J",59,403,"Cj0G=`","H4%","Xe"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"#J",59,403,"Cj0G=`","H4%","Xe"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)