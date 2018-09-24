





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"":"","1.0040148007833392e+308":59,"1.5528479049800423e+306":843}
argument3[893] = "!"
argument3[403] = true
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 1.7325340501318636e+308
argument2[3] = false
return a/b-c
};
var argument3 = r_1;
var argument4 = {"1.4708808680667617e+308":"3"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = {"595":1.5032510040176565e+308,"":"<IM","WF+;eo1-":"+L","1.5461302893782525e+308":100,"Lt":403}
argument7[7] = {"893":-1,"8.810409369083871e+307":403,"h":"n]S","":1.5421272919977366e+308}
argument7[1] = [893,595,213,893,607,82]
return a-b/c
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['V'] = null
base_3[0] = 8.720508202853399e+307
argument9[3][3] = {"607":213,"705":1.6600815819367555e+307,"1.6500805394785028e+307":"m@k","":6.01075894575409e+307,"i":3.0419868572407524e+307,"9.020925146294782e+307":""}
return a-b-c
};
var argument9 = null;
var argument10 = r_0;
var base_0 = [-100,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,403]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,403]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,403]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)