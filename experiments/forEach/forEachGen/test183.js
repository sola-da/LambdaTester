





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.3434821406183095e+308] = [714,-1,49,893,5e-324,618,49,126]
base_0[4][4] = {"25":"","59":1.7869164845049369e+308,"126":"5","595":"4","627":1.2399090881743311e+308,"714":"n[J@Ga","969":"","":"U","V":"s","vuy":""}
return a+b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = true
return a+b-c
};
var argument5 = null;
var argument6 = {"1.0284875235650077e+307":"F","0,":1.4023331156925303e+308,"":2.416782071201215e+307,"(I7":607,"`":"","&":3.7154103611117224e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = true
return a*b*c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"82":7.990295468891715e+307,"618":893,"969":"","":"","9.031668557231394e+307":403,"R":9.417646079593348e+307,"}lP":1.7399950209576398e+308,"1.0332319288579883e+308":"Y","1.3548608996134217e+308":"i"}
return a+b*c
};
var argument10 = null;
var base_0 = [25,49,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,49,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)