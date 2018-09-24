





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = ["Lm","z","6","+","&v)J","U Wx1","c"]
argument3[0] = false
argument3[90] = {"403":"R","655":"","3.759740502797151e+307":"3","-1":"+","":8.05235215815219e+307,"9.246442055415896e+307":823}
return a/b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6.35085648319999e+307] = 242
return a/b+c+d
};
var argument3 = "bc";
var argument4 = "1(|";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = ""
return a-b*c+d
};
var argument6 = r_0;
var argument7 = null;
var argument8 = true;
var argument9 = false;
var argument10 = "S";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = 969
return a+b*c-d
};
var base_0 = [783,5e-324,126,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,5e-324,126,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,5e-324,126,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,5e-324,126,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)