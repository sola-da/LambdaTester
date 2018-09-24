





var callbackArguments = [];
var argument1 = null;
var argument2 = 655;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = [">2"]
return a*b-c-d
};
var argument5 = "}8";
var argument6 = [126,100,59,82,403,705,-1,783,157];
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.4205726959827606e+308] = null
argument6[1.4205726959827606e+308] = {"59":-1,"242":":","":"c","1.7105578226102825e+308":618,"D":1.6429270855880694e+308,"3.2619589118515543e+307":""}
base_1[2] = null
return a+b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.889879335222838e+307] = [843,655,1.7976931348623157e+308,0]
base_2[2][0] = true
argument10[1.1277822633002616e+308] = true
return a+b+c-d
};
var argument10 = 9.775334388951483e+307;
var argument11 = false;
var argument12 = [-100,714,"g8c+",655,157,126,"6",1.7976931348623157e+308];
var argument13 = "r";
var argument14 = true;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = null
argument13[627][126] = false
return a*b*c+d
};
var base_0 = ["C",1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test923.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)