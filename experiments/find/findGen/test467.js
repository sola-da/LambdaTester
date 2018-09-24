





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = "!"
argument1[3.377960715099946e+307] = true
return a*b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[969] = [100,714,213,403,25,49,627,126]
argument4[4] = ""
return a/b-c
};
var argument5 = "rh^_]i:{?";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"49":126,"607":1.471655531909391e+308,"":5.133696977365377e+307,"1.55883711065069e+307":"q3?nsd","1.1086908950719647e+308":"","4.509125500413944e+307":"","N":1.4932972690928823e+308,"2.62056194668545e+307":"","a":"*r=","L":"9"}
base_2[3][1] = 1.0547654947297417e+308
return a*b-c
};
var argument7 = 7.558610420927674e+306;
var argument8 = ["Rl","e","}","c","]","#","C","]h","Z"];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['!j'] = null
base_3[3][7] = ""
argument10[8.748669805137695e+307] = ""
return a/b*c
};
var base_0 = [460,242,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,242,595]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,242,595]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,242,595]
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
require("fs").writeFileSync("./experiments/find/findGen/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)