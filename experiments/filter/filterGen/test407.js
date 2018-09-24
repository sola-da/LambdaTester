





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['c'] = {"?%":969,"U":"c","4.1416160571218973e+307":1.2528714671851125e+308,"":8.817205138034203e+307,"8.77689412583853e+307":1.471921936394348e+308,"7.38326654669319e+306":"+5l3","8.214244099213866e+307":1.304393975305568e+308,"1.4754790833357358e+308":8.684916922642612e+307,"pg4":893}
argument1[0] = ["px","-N!zj9","O"]
return a-b-c
};
var argument2 = ["I`%","&","7","<j",714];
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [893,25,126,82,0,627]
return a/b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
base_2[3] = true
return a/b-c
};
var argument7 = [100,607,59];
var argument8 = {"":"","-1":618,"RUa3=B,":"t","fR8":1.7707145539440148e+307,"P":783,"Hg$_&{":122,"1.3613893644589698e+308":"h","r":"<8"};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['A'] = ""
return a*b-c
};
var argument10 = 655;
var base_0 = [823,618,627,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,618,627,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test407.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)