





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 1.619153955088517e+308
base_0[6] = ["0L}7=AW1l:k","N","j","eH",")WM-{-","7","q","79foT","$D","a]"]
argument2[403] = {"100":8.344036560283269e+307,"595":969,"823":"","1.3443639915375035e+307":595,"":1.7583781793089559e+308,"3.2293345029682805e+307":"P","7.568243109486055e+306":"*","1.3683639110772883e+308":5.744576341331812e+307,"4.992141917887968e+307":""}
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"49":"","618":893,"1.3676089160666147e+308":"",":":"","":"","1.7976931348623157e+308":"*}QW"}
argument3[3.3156198695370476e+307] = null
base_1[0] = {"126":"","714":"jTw","893":1.793731861843511e+308,"":"Ci`","9.412621796727743e+307":"`","(s-":"","-1":5.879268318203237e+307,"u":"j","1.7809131664114667e+308":"z"}
return a*b/c
};
var argument3 = {"627":"","nZ p":4.507252229605276e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [969,607,122,213,627,627,122,893,893]
base_2[7] = null
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 1.6807902301076458e+307
return a+b-c
};
var argument6 = false;
var base_0 = [";","i_({",";=","5"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","i_({",";=","5"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","i_({",";=","5"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","i_({",";=","5"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)