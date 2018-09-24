





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = 1.0518989254499106e+308
return a+b-c+d
};
var argument2 = r_0;
var argument3 = null;
var argument4 = null;
var argument5 = r_0;
var argument6 = "z";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = 1.5736494279409925e+308
base_1[6] = [705,460,627,100,783,0,0]
argument4[126] = [-100,1.7976931348623157e+308,49,213]
return a+b*c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = 157
base_2[3] = {"25":1.8440685894947903e+307,"157":"#","607":783,"783":242,"":1.4830441451385347e+308,"2.179317288159317e+307":"y","1.7976931348623157e+308":1.3203768818514431e+308,"1.0926725297658841e+307":"tK"}
argument10[5] = {"1.603313590180487e+308":1.5860290469149455e+308,"`":1.114244724712357e+308,"1.5661230906998122e+308":6.155776818935626e+307,"":";O","1.0263236799540323e+308":"","1.4592881572758609e+308":""}
return a-b-c-d
};
var argument9 = r_1;
var argument10 = r_0;
var argument11 = 1.7964264499723414e+308;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"6":1.6315857684708044e+308,"893":"","4.06164184208546e+307":"u","1EYR":"K",")":"%R","TPfG(R%-+B":9.449042894534303e+307,"":"","1.713968015404747e+308":"GY<r{9w"}
base_3 = null
return a+b/c*d
};
var base_0 = [126,242,969,1.7976931348623157e+308,823,460,607,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,242,969,1.7976931348623157e+308,823,460,607,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,242,969,1.7976931348623157e+308,823,460,607,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,242,969,1.7976931348623157e+308,823,460,607,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)