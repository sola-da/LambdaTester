





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = ""
argument2[8] = [-100,157]
return a/b/c-d
};
var argument5 = ["R","7"];
var argument6 = null;
var argument7 = "_";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = null
base_1[1] = null
argument7[7] = null
return a+b+c*d
};
var argument9 = 403;
var argument10 = true;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5.71178064163152e+307] = [100,1.7976931348623157e+308,157,59,969,157,714,25,0,595]
argument9[0] = ""
return a-b/c+d
};
var argument13 = false;
var argument14 = r_3;
var argument15 = 6.808745254405107e+307;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[4] = {"49":7.5490348652475285e+307,"213":"","595":1.718195348478872e+308,"":"","5.552205629634259e+306":25,"g":100,"1.6420696235378128e+308":"","3X48":"","$m":1.5392531433391022e+308}
return a*b/c-d
};
var base_0 = [122,126,82,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,126,82,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,126,82,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,126,82,-100]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test967.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)