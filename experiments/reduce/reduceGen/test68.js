





var callbackArguments = [];
var argument1 = "";
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = -1
argument2[2] = true
argument2[3] = {"460":1.3806899954065692e+307,"893":82,"969":403,"5.526547854399515e+307":"6","4.392583087188832e+307":"D","6.496638231100557e+307":"B","":""}
return a*b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = null
return a-b-c+d
};
var argument6 = null;
var argument7 = true;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = {"25":"X","9.363159441870514e+307":"6%","d":213,"":3.740207321044044e+307,"4.2473113159593213e+307":1.7976931348623157e+308}
base_2[5] = {"0":"jh","49":1.2755512755417156e+307,"=":783,"X":"]","1.1679954109349114e+308":0,"1.4402649763514095e+308":"|"}
return a*b+c*d
};
var argument10 = null;
var argument11 = "c";
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.5935076856377337e+308
base_3[0][0] = [-1,49,0,595,714,126,122]
return a/b*c/d
};
var base_0 = [627,82,122,823,100,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,82,122,823,100,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,82,122,823,100,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,82,122,823,100,403]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)