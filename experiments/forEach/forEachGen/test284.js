





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.92397107964922e+307] = null
return a*b*c
};
var argument3 = {"f":"","Kq":"","":""};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.92397107964922e+307] = {"25":4.236981740794979e+307,"783":"M","3.0754817000675394e+307":"","o6":5.132399240330538e+307,"zy":969,"":595}
base_2[0][4] = {"2":8.741670860433871e+307,"655":"w(3","705":893,"":460,"1.1523445903925921e+308":2.8816113362536204e+307,"-100":893,"8K#?":6.314563430363423e+307,"H":"","1.4328932224975086e+308":"i","C":25}
argument6[157] = null
return a*b-c
};
var argument6 = r_2;
var argument7 = 618;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = 1.1204518837325234e+308
return a+b-c
};
var argument9 = r_0;
var argument10 = "z<";
var base_0 = [49,213,823,49,783,126,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,213,823,49,783,126,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,213,823,49,783,126,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,213,823,49,783,126,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)