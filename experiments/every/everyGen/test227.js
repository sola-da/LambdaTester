





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = ""
return a/b-c
};
var argument2 = null;
var argument3 = ["K","Axt","0E","?","FKY`pKPHNw^D","c"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = null
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [783,823,969,618,213,-100,126]
base_2[9] = {"242":1.264121245536049e+308,"":"9","Zf":"M","1.7004594008779321e+308":"","?i":1.5219355364265078e+308,"1.7875286144346197e+308":100,"1.1286612133093665e+308":1.3403385710515657e+308,"1.5539425816593359e+308":49}
return a-b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = true
argument8[0] = null
argument8[2] = {"0":1.7587274721365938e+308,"100":3.533081230473843e+306,"403":1.843660274736881e+307,"2.3545068018223918e+306":"gJ)","":"","`wE'":893,"5.344331241360991e+307":"d%V,","5e-324":"5l","1!":")","1.1989274655436296e+308":100}
return a+b+c
};
var argument8 = null;
var argument9 = false;
var base_0 = [122,126,893,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,126,893,823]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,126,893,823]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,126,893,823]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)