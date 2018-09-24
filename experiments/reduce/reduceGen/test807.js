





var callbackArguments = [];
var argument1 = {"7.91722141297328e+307":6.285494972115524e+307};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = null
return a+b-c*d
};
var argument5 = true;
var argument6 = null;
var argument7 = "!";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.889879335222838e+307] = "LSVpI"
argument7[1] = {"595":"","]G9f*":"7Hi&0_V9<Ra"}
return a/b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9] = ""
base_2[4] = ""
argument10[25] = null
return a*b+c+d
};
var argument10 = null;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1] = true
argument12[4] = false
argument14[3] = ""
return a+b+c+d
};
var argument13 = null;
var base_0 = [969,0,823,627,5e-324,595,969,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,0,823,627,5e-324,595,969,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,0,823,627,5e-324,595,969,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,0,823,627,5e-324,595,969,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test807.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)