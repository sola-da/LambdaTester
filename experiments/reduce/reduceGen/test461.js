





var callbackArguments = [];
var argument1 = [893,618,714,595,5e-324,893];
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = 1.2058315257670775e+308
argument2[3] = -1
return a-b+c/d
};
var argument5 = false;
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = [242,655,893,-100,705]
return a+b-c*d
};
var argument9 = {"607":1.1304812836841296e+308,"8.12015582784064e+307":"*","<Kybs":25,"":1.2740315786795131e+308,",0*u5":100,"7.50394916649892e+306":1.6386717613392057e+308};
var argument10 = 7.450089385911601e+307;
var argument11 = r_1;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"1":1.0703916863578615e+308,"460":"","uN":5e-324,"oiO":607,"3.019422271792591e+307":9.706322997779963e+307}
return a/b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[4] = null
argument14[25] = 8.045021940933905e+307
return a/b-c/d
};
var argument14 = 1.4769515670683292e+308;
var base_0 = ["W",157,100,823,"&","S},"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W",157,100,823,"&","S},"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W",157,100,823,"&","S},"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W",157,100,823,"&","S},"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test461.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)