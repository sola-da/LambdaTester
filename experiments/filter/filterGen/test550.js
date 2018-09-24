





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = ["{n","3G","eE "]
base_0[4][7] = false
argument3[3.7154103611117224e+307] = {"783":82,"1.3761527236478413e+308":"G`","2.9240835971613656e+307":1.1655953337572914e+308,"1.8030984398199739e+307":1.0244366340674904e+308,"da":";","":1.1118567603086285e+308}
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"1.8390605324372996e+307":82,"1.112418111013768e+308":59,"}":3.618017354041742e+305,"M":8.31262464072885e+307,"7.56160536215124e+307":1.2881195148141127e+308}
base_1[1] = [783,0,823,627,0,100,0,49]
argument4[5] = 213
return a/b-c
};
var argument4 = [59,0];
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['c'] = null
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.7847438319683965e+308] = false
argument8['K'] = {"242":"","618":"","m":8.610104026649453e+307}
return a+b/c
};
var argument8 = true;
var base_0 = ["u","eh","D","RQ","D","@E","c","<"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","eh","D","RQ","D","@E","c","<"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)