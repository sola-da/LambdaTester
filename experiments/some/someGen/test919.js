





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][6] = {"627":1.1417228989349647e+308,",":"zZ31*","$!$5":843,"$":"L[","1.2658989034477382e+308":"","":969,"6.144139558108195e+307":8.460888871083855e+307}
argument3[2] = [":`","d","U",100,157,460,82,122]
argument3[9.551053197482062e+307] = ""
return a*b-c
};
var argument2 = ["a_x","@7h","^","*","Aq|"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.5109538778533692e+308] = {"460":0,"1.097232841761577e+308":"","Z@|":655,"":5.139547894481405e+307,"=_":"","dr":-1,"2.755192489971786e+307":"l"}
base_1[0][4] = ""
argument6[5] = ""
return a/b+c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
return a/b*c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = 157
base_3[1][2] = null
argument11[7.004668712060429e+307] = null
return a/b-c
};
var base_0 = ["=",595,"X^X","]","V"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",595,"X^X","]","V"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",595,"X^X","]","V"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",595,"X^X","]","V"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)