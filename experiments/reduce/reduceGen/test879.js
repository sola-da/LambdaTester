





var callbackArguments = [];
var argument1 = true;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = ""
base_0[9] = 1.4204972417083278e+308
return a+b+c*d
};
var argument5 = null;
var argument6 = false;
var argument7 = [403,893,607,213,655,-100,595,714,969];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = [843]
argument6[213] = 843
return a+b/c-d
};
var argument9 = r_2;
var argument10 = ["_g",0,"oU3w",242,"?",59,714];
var argument11 = r_2;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = null
return a*b-c+d
};
var argument13 = false;
var argument14 = null;
var argument15 = r_2;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[9] = {}
return a*b/c+d
};
var base_0 = [1.7976931348623157e+308,460,403,49,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,460,403,49,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,460,403,49,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,460,403,49,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)