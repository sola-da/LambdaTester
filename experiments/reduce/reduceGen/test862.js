





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"82":"","5.998810541098748e+307":1.1849080902031335e+308,"7.330807134796374e+306":823}
argument2[9.331954948603684e+307] = null
argument2[1] = false
return a+b/c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = "m";
var argument5 = "O";
var argument6 = [627,-1,969];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 1.268315278409668e+308
base_1[3] = 5.524517277379425e+307
return a*b*c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['l&'] = {"1.7702205897614217e+308":"U>"}
argument10[25] = 403
return a-b+c/d
};
var argument9 = r_1;
var argument10 = "";
var argument11 = null;
var argument12 = [618,1.7976931348623157e+308,607,403];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument11[403] = null
return a/b-c+d
};
var base_0 = ["C+uKwcc","k","]z,5","A?",",","U"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C+uKwcc","k","]z,5","A?",",","U"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C+uKwcc","k","]z,5","A?",",","U"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C+uKwcc","k","]z,5","A?",",","U"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)