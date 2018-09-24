





var callbackArguments = [];
var argument1 = 1.8947211813698017e+307;
var argument2 = "^";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = 714
argument3[90] = {"403":"","893":655,"6Ww":"T","1.6711006825701052e+308":1.3505422209132302e+308,"":6.648481992543165e+307,"9w":1.66951117195316e+308,"5e-324":"","RV":"f"}
argument1[2.1869172855352885e+307] = true
return a+b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = 607
argument7[25] = 126
return a*b-c-d
};
var argument6 = 595;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 82
return a-b/c+d
};
var argument8 = {};
var argument9 = -1;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5] = "B>R8"
base_3 = null
return a-b/c+d
};
var argument11 = 1.4244618496426649e+308;
var argument12 = null;
var base_0 = [823,49,823,969,242,714,5e-324,122,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,49,823,969,242,714,5e-324,122,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,49,823,969,242,714,5e-324,122,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,49,823,969,242,714,5e-324,122,1.7976931348623157e+308,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test653.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)