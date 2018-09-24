





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"RQv":"<|Z","":6.288795987398774e+307,"1.514578300169574e+306":1.1039618384423967e+308,"4.228317582149249e+307":3.8768196110444365e+307}
argument3[1.0546776681946723e+308] = [49,714,893,213,618,823,157]
return a/b/c
};
var argument2 = ["9QAiC",607,157,213,607,")",25,403];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = true
return a/b-c
};
var argument5 = ["w","L","M","ziV","zS","Z","2","Ye","_"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = {"714":49,"":"","1.7975473638883802e+308":"t","4.897984334259787e+307":618,"1.6255245504960968e+306":"","D6":595}
base_2[0][0] = [157,460,460,49,82,126,82,0,-100]
return a-b*c
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [5e-324,122,-100,59,242]
return a+b-c
};
var argument10 = {"655":100,"":"","1.1813494343227776e+308":"",",":655,"O":655};
var base_0 = ["CJO",823,"[n","JE","{"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["CJO",823,"[n","JE","{"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test553.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)