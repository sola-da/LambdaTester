





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = 627
argument2[969] = [82,59,1.7976931348623157e+308,100,49,627,0,126,100]
base_0[1][4] = {}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[618] = [122]
base_1['length'] = {"W":"","":"Z","vn":"&u","R-":1.0186147266616281e+307}
return a+b/c
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"25":"","59":25,"157":607,"$p":7.05580055602792e+307,"":655,"M1":655}
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.869573703797622e+307] = 5.589520838051389e+307
argument8[6] = ["e","4","s",157,"Z(P","D!H",126,0,1.7976931348623157e+308,0]
argument8[403] = [5e-324,403,655,783,122,82]
return a-b-c
};
var argument7 = ["Y","uV","^-","&","(","S!b$","bTDB","*","h"];
var base_0 = [460,403,-100,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,403,-100,843]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,403,-100,843]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,403,-100,843]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)