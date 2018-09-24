





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = [25,122,49,5e-324]
argument3[627] = true
argument3[59] = 1.6919101480824707e+308
return a*b/c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [969,"s",25]
base_1[0][9.12287810829114e+307] = 1.0945439322286948e+308
return a*b/c/d
};
var argument7 = {"9.276128693106102e+307":8.986242296863679e+307,"1.2320466294413898e+308":-100,"3.100469342233111e+307":5.12316390416774e+307};
var argument8 = r_2;
var argument9 = {"90":0,"157":59,"969":"b","8.396842967612193e+307":5.945519272307156e+307,"3.931362328352819e+307":"S","n":627,"1.562766868319593e+308":-100,"":655};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6.35085648319999e+307] = false
base_2[2] = "-"
base_2[1][0] = true
return a*b/c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = "w"
base_3[0][3] = [1.7976931348623157e+308,"x",":f}yC","Ljr8",627,1.7976931348623157e+308,705,627]
return a*b*c-d
};
var argument12 = null;
var argument13 = false;
var base_0 = [655,607,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,607,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,607,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,607,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)