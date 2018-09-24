





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.551053197482062e+307] = ""
argument2[0] = 655
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.224481734419934e+307] = null
argument3[8] = {"":7.336045803155013e+307,"4.0753535813228414e+307":"<JH","1.271543270469383e+308":"j(","6.584476766655977e+307":"0O0","wvvB":59,"1.4300176490708098e+308":"P5o"}
return a/b/c
};
var argument3 = 3.91975584227191e+305;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = ["?",";","UJN","J"]
argument5[9] = {"":"1F","-1":7.428056828656836e+307,"1.5725429445710443e+308":"","1.682543523632323e+308":"",";":"","B":783}
argument5[4] = false
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][8] = ""
base_3[5] = "SI'_"
return a+b*c
};
var argument6 = r_0;
var base_0 = [607,"Y",403,"-","7","ayk2{","Qe",655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"Y",403,"-","7","ayk2{","Qe",655]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"Y",403,"-","7","ayk2{","Qe",655]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"Y",403,"-","7","ayk2{","Qe",655]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)