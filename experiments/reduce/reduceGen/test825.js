





var callbackArguments = [];
var argument1 = "tz";
var argument2 = false;
var argument3 = 627;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = null
base_0[3][1] = {"59":705,"618":1.1288833695316898e+307,"783":627,"5e-324":82,"":"","4.7005339124824e+307":" "}
return a*b/c/d
};
var argument5 = null;
var argument6 = {"6":"ZHO","49":"","213":1.1320871696344523e+307,"2.5660139233795567e+305":"[","S":"9","w":"","1<'":3.7816461343216024e+306};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = ""
return a+b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = [1.7976931348623157e+308,893,843,607,59,213,843,783]
argument11[25] = ["L+M","y","q{,T]","L","MOs|ojg"," ",";UF",714,460]
return a+b*c+d
};
var argument10 = 403;
var argument11 = false;
var argument12 = 25;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['Cb'] = "m"
return a/b*c+d
};
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)