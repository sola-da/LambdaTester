





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
return a-b*c*d
};
var argument5 = false;
var argument6 = [100,714,627,82,783,100,213,213];
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = -100
base_1[0][9.12287810829114e+307] = ["#","*","^","g",59,460,82,893,"`,"]
return a+b+c+d
};
var argument9 = false;
var argument10 = null;
var argument11 = 460;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = [969,122,607]
return a+b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.1277822633002616e+308] = false
argument13[3] = ["*","g6"]
argument13[126] = ""
return a-b*c*d
};
var base_0 = [59,893,618,49,213,242,157,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,893,618,49,213,242,157,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,893,618,49,213,242,157,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,893,618,49,213,242,157,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test738.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)