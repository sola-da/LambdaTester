





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = false
return a+b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = 5.259596721389872e+307
base_1[0][2] = false
base_1[0] = true
return a+b-c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"":"","*F>i":9.646181303078581e+307,"IUMc":2.1855061176703655e+307,"3.92030899026299e+307":8.770222902891489e+307,"E4P":82,"q:":1.08338904594209e+308,"or":9.836932598772451e+306,"1.6847232266507946e+308":6.607355679232584e+307}
argument7[0] = true
base_2[0][2] = ["f","=","7","V$","E"," ","W)<","y"]
return a/b-c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.9097830510613482e+307] = 1.7329201499809617e+308
argument10[2.4183178393969103e+306] = {"607":"X","618":59,"":2.1498053486557176e+307,"1.121378789110955e+308":"","ud":""}
base_3[1] = false
return a*b-c
};
var argument9 = [460,595,"C;",82];
var argument10 = "k";
var base_0 = [-1,"*",49,"I"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"*",49,"I"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"*",49,"I"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"*",49,"I"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)