





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"595":"G:","705":"!@JuX","uq":"","z":"a","2.3262972873991687e+307":59,"1.4801023708803116e+308":6.305377584537022e+307,"@$%":"","":7.26132184133134e+307,"1.1088887471938217e+308":""}
argument2['U+WQ'] = ["kF=%|k-",157,"0",";"]
return a/b/c
};
var argument2 = null;
var argument3 = {"z":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 4.201734647757725e+307
argument5 = {"W":"","":"Z","vn":"&u","R-":1.0186147266616281e+307}
return a/b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 607
argument8[9] = null
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ["d","7x","YH+h","V","4k","U+=r","dA","e","4"]
argument8[1.1881593224845412e+308] = null
base_3[0][823] = true
return a*b-c
};
var argument8 = {};
var argument9 = null;
var base_0 = ["yt","q","ox","2","4","#(","S","l","!4W-",213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yt","q","ox","2","4","#(","S","l","!4W-",213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yt","q","ox","2","4","#(","S","l","!4W-",213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yt","q","ox","2","4","#(","S","l","!4W-",213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)