





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
base_0[1] = false
return a-b+c
};
var argument2 = r_0;
var argument3 = {"823":1.7976931348623157e+308,"D":59,"":"Dlbb","4.797078780672375e+307":8.925090471369404e+307,"1.6753396615867485e+308":607,"-100":"","1.6612818576172084e+308":9.62617508552278e+307,"1.715428662376767e+308":607};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = -1
return a*b+c
};
var argument6 = r_1;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ["9&)","`","r","Gs",";Q","Ob3;g","M","D"]
argument9[3.0481490052276395e+306] = "j1"
return a/b-c
};
var argument9 = ["CJOyc*h","E","i",122,0,59];
var base_0 = ["4L^kc",242,460,705,627,"=pk",595,627,"s","E"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4L^kc",242,460,705,627,"=pk",595,627,"s","E"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4L^kc",242,460,705,627,"=pk",595,627,"s","E"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test81.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)