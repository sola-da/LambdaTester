





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [655,627,823,595]
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = false
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = 6.581004465087028e+307
base_2[8] = [969,"]M{",122,126,"("]
base_2[4][7] = 49
return a+b*c
};
var argument5 = {"126":"","157":"%u","":1.639577999873068e+308,"1.6058300807141761e+308":"","4.578292124222585e+307":"E","y}":6.551022290846595e+307,"4.586962579122981e+307":893,"XT":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = {"25":100,"59":"","460":1.6142469959954072e+308,"4.779867290197255e+307":1.5841399680809252e+308,"8.720333514909753e+307":",e4","9U+0":1.1541272707530355e+308}
return a/b+c
};
var base_0 = ["I","5","}t","-","1","y[","j","|h"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","5","}t","-","1","y[","j","|h"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","5","}t","-","1","y[","j","|h"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","5","}t","-","1","y[","j","|h"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test898.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)