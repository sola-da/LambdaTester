





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.71178064163152e+307] = 714
base_0[3][1] = "0"
base_0[2] = [157,893,126,893]
return a+b+c-d
};
var argument2 = true;
var argument3 = [-1,59,-1,25,49,242];
var argument4 = r_1;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[';N'] = "F3"
argument5[4] = {"843":"","@":122,"9.600221035536575e+307":"","=3J":"Q","5.391968375711895e+307":1.381290712409188e+308}
base_1[0][3] = ""
return a/b-c/d
};
var argument7 = r_2;
var argument8 = r_1;
var argument9 = [607,59,843,618];
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 460
argument9[2] = ["v",82,"dT",0]
argument9[403] = true
return a/b+c+d
};
var argument11 = null;
var argument12 = r_2;
var argument13 = r_2;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = "5"
argument12[3] = null
argument11['A'] = [">4",1.7976931348623157e+308,-1,"oRQB","wm","n"]
return a+b*c*d
};
var base_0 = ["yd","#u","$ry>","W"," ","@","O^^","=","w"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yd","#u","$ry>","W"," ","@","O^^","=","w"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yd","#u","$ry>","W"," ","@","O^^","=","w"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yd","#u","$ry>","W"," ","@","O^^","=","w"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test984.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)