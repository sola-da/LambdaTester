





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = 25
base_0[8] = ["!%<t",">;Ja=",893,627,893,"LD","r"]
return a/b+c/d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1277822633002616e+308] = 6.270736750200187e+307
return a*b+c*d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = false
base_2[1][0] = {"403":213,"823":627,"":"","8.257342613678691e+307":"w"}
return a-b/c+d
};
var argument6 = {"":157,"8.935083711567212e+307":403,"1.7169248976936618e+307":2.9752756153898e+307,"c":";","t":403,"UN":-1,"@":"","(7":"i","2.4669632337910925e+307":"c<","O":1.78436704435907e+308};
var argument7 = ["#","U","8#_@","BLce","Zc"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
return a/b-c+d
};
var argument9 = null;
var argument10 = null;
var base_0 = [823,783,783,843,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,783,783,843,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,783,783,843,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,783,783,843,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test77.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)