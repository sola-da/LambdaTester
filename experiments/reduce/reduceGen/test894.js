





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = ["O",213,"Et",49,"6L<uS","i","M",403]
return a+b-c*d
};
var argument5 = true;
var argument6 = true;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = false
argument7[627] = {"49":-1,"59":157,"157":4.494147429921739e+307,"":"","1.0472207791609802e+308":"","1.7976931348623157e+308":8.539300993483049e+307,"L":"3q(T","5.119639581558767e+307":1.2499912995570293e+308,"kp":213,"`":25}
argument5['s'] = 1.380825286089439e+308
return a*b*c+d
};
var argument9 = null;
var argument10 = null;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = 122
argument10[7.463432409233234e+307] = [893,783,595,"C","?Es",">W",823]
argument9['s'] = 403
return a/b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[4] = null
return a/b/c+d
};
var base_0 = ["SLA",",","F","|&<3S"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["SLA",",","F","|&<3S"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["SLA",",","F","|&<3S"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["SLA",",","F","|&<3S"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)