





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[893] = {"242":618,"607":-100,"893":"",">@":1.7009308705241491e+308,"lj":"","4.62345860082126e+307":2.088579947161323e+307,"gY":"}-","4.3988693484867004e+307":1.3996053891134633e+308,"1.4159010589023574e+308":"o0"}
argument2[1] = {"59":"Wj","":714,"1.6505398913308307e+308":"","g":9.30113560101831e+307,"C":"","fi_":"T"}
argument3[6.35085648319999e+307] = false
return a*b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[59] = false
argument3[1] = false
argument5[595] = null
return a*b/c+d
};
var argument7 = true;
var argument8 = "";
var argument9 = "AlC";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"595":"","q[":9.63826898271084e+307,"1.190257688811313e+308":242,"A>":3.943272547499943e+307,"1.9347556369558383e+307":893,"":"*",";]:s":"WV"}
return a+b/c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = ["l","U","I","I","_35"]
argument13['18{'] = [783,126,607]
argument12[25] = [157,100,705,-100,59,627]
return a*b+c+d
};
var base_0 = [126,655,126,";k0|;"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,655,126,";k0|;"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,655,126,";k0|;"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,655,126,";k0|;"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test571.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)