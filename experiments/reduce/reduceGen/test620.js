





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = "$"
argument2[627][126] = [705,607,783,627,460,595,618,49]
return a*b/c*d
};
var argument2 = false;
var argument3 = 1.7638449781913584e+308;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.3938918493123786e+308] = {"":";G","8.218984797551765e+307":""}
return a/b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = {"403":714,"1.377661794123627e+308":"","":"","1Skz":100}
return a+b*c/d
};
var argument7 = null;
var argument8 = null;
var argument9 = r_2;
var argument10 = 25;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = ""
argument9[0] = [0,783,213,100]
return a+b-c-d
};
var base_0 = ["F<+4L-",0,"QI",823,82,595,618,"j"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F<+4L-",0,"QI",823,82,595,618,"j"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F<+4L-",0,"QI",823,82,595,618,"j"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F<+4L-",0,"QI",823,82,595,618,"j"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test620.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)