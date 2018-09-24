





var callbackArguments = [];
var argument1 = "";
var argument2 = 9.559927230340316e+307;
var argument3 = {};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = "*"
return a+b+c-d
};
var argument5 = 618;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = {"C":893}
return a*b+c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "c "
argument11[2] = [893,"Z","(",714,-100,"A$9"]
return a*b/c/d
};
var argument10 = null;
var argument11 = false;
var argument12 = r_3;
var argument13 = true;
var argument14 = "";
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = {"5":823,"893":1.1920477751261149e+308,"1.0001971277745136e+308":"","":"","5.31277866134637e+307":82,"1.4819964403054266e+308":"?@6","1.1724063271520406e+308":1.634089953753629e+308,"1.3057996624013722e+308":"","1.6903429778338936e+308":-100}
argument14[1.3938918493123786e+308] = ""
return a*b+c*d
};
var base_0 = [460,122,714,893,242,403,705,-100,242,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,122,714,893,242,403,705,-100,242,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,122,714,893,242,403,705,-100,242,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,122,714,893,242,403,705,-100,242,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test672.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)