





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 3.3982326317124153e+307
return a+b-c
};
var argument2 = true;
var argument3 = [59,0,"r","%",-1];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = {"1.2757067004372604e+307":"","5.201653333201326e+307":"9","d":"c"}
argument8[1.1881593224845412e+308] = [595,618,"9<",460,627,-1,655,"xD","T{"]
base_2[3][1.7261030733891165e+308] = 595
return a-b+c
};
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['LK'] = 627
return a-b/c
};
var base_0 = ["O6","&","#","<!X"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O6","&","#","<!X"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O6","&","#","<!X"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O6","&","#","<!X"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test628.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)