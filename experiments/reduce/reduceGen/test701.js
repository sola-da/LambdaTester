





var callbackArguments = [];
var argument1 = {"59":1.2992368384883884e+308,"J":"f","1.4726925221570993e+308":"P!","1.1157414311044026e+308":"y","1.7439475546507887e+308":"N","":"DR"};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[90] = [655,823,-100,"9z",627,"Y"]
return a*b+c+d
};
var argument5 = "M";
var argument6 = false;
var argument7 = "ixX#";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
argument7[595] = {"823":"","":"","4.837791787888649e+307":1.3642658901267115e+308,"1.2943904787873644e+308":157}
return a*b+c+d
};
var argument9 = false;
var argument10 = [";","[}","#","[$","Gr"];
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = ""
return a+b/c-d
};
var argument13 = null;
var argument14 = null;
var argument15 = r_0;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = false
return a*b*c-d
};
var base_0 = [126,0,5e-324,823,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,0,5e-324,823,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,0,5e-324,823,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,0,5e-324,823,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)