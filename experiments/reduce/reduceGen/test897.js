





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = "JXG%]"
argument2[1.612812046173122e+308] = ""
argument3[1.3938918493123786e+308] = {"100":-100,"":607}
return a-b-c-d
};
var argument5 = 969;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[90] = null
argument7[4] = [1.7976931348623157e+308]
base_1[4] = ["yI","@",",9"]
return a+b/c-d
};
var argument9 = false;
var argument10 = 823;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[100] = {"595":"","":893,"1.4390193790970503e+308":157,"t":"6","r":0,"[":"h","8.222261346004833e+307":82,"R":"V"}
return a-b*c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 126
argument13[0] = [" ","w>","]","8","!"]
return a/b-c/d
};
var argument14 = false;
var base_0 = [-1,-100,49,213,82,-100,783,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,-100,49,213,82,-100,783,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,-100,49,213,82,-100,783,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,-100,49,213,82,-100,783,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test897.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)