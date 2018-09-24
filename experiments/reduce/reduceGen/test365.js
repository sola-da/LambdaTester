





var callbackArguments = [];
var argument1 = r_0;
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = false
base_0 = ["(^a","e","<85","5F","J"]
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[213] = false
argument5 = false
argument7[0] = [-100,595,122]
return a+b+c+d
};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = [59,49,100,126,100]
argument7[126] = null
argument7[9] = {"49":"*","157":843,"":"","1.3459144280551128e+308":"w>"}
return a*b+c+d
};
var argument8 = r_2;
var argument9 = null;
var argument10 = [823,403,82,-100,82,607];
var argument11 = r_0;
var argument12 = "h";
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3] = 1.18301752605745e+308
argument10[8] = 7.950660501123824e+307
argument11[3] = {"100":122,"460":6.269101629271216e+307,"]":"","B":"q?!","2.847961530912833e+307":1.3411369480684416e+307,"":7.572360141735749e+307,"1.7581672374864912e+308":"c"}
return a*b-c/d
};
var base_0 = [705,655,59,627,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,59,627,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,59,627,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,59,627,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)