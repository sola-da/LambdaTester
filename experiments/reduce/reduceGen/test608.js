





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = true
argument2[4] = null
return a*b/c/d
};
var argument5 = null;
var argument6 = null;
var argument7 = "(l";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = 82
argument7[25] = [242,"]","IvB:b"]
argument7[7.889879335222838e+307] = ["hN","sU-E="]
return a/b-c/d
};
var argument9 = true;
var argument10 = false;
var argument11 = [783,843,627,714,893,5e-324,618,1.7976931348623157e+308];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[90] = false
base_2[0][9.12287810829114e+307] = 1.6310192977915702e+308
argument11[5] = [122]
return a-b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[595] = null
return a-b/c/d
};
var argument14 = false;
var base_0 = [969,59,126,893,"d","Tjvh;",607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,59,126,893,"d","Tjvh;",607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,59,126,893,"d","Tjvh;",607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,59,126,893,"d","Tjvh;",607]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)