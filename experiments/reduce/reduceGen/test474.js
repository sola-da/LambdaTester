





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = ["R=","e0","MM","w"]
argument3[403] = {"49":783,"403":1.0317024425936164e+308,"618":"","":"H","2.67580594530259e+307":59,"R`rs":1.2769504477375118e+306,"2.2711420745846814e+307":460,"6.185032327365461e+307":-100}
argument3[25] = true
return a/b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = null
argument7[59] = "XG24"
return a-b/c-d
};
var argument6 = r_1;
var argument7 = {"157":"!ItsB","618":"`kx","783":242,"6.848796323571576e+307":"H","7.268687789399691e+307":25,"1.16131613369348e+308":59,"":"Q"};
var argument8 = r_1;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
argument8[82] = null
return a*b+c*d
};
var argument11 = r_2;
var argument12 = null;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[';N'] = null
argument13[1.359136872727139e+308] = null
argument13[59] = ["Wm",460]
return a*b+c+d
};
var base_0 = ["0M","R","|","m",82,-1,"a",403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0M","R","|","m",82,-1,"a",403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0M","R","|","m",82,-1,"a",403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0M","R","|","m",82,-1,"a",403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)