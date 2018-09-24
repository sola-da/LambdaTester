





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = {"627":1.1417228989349647e+308,",":"zZ31*","$!$5":843,"$":"L[","1.2658989034477382e+308":"","":969,"6.144139558108195e+307":8.460888871083855e+307}
argument3[460] = [":`","d","U",100,157,460,82,122]
argument2[7] = ""
return a*b-c
};
var argument2 = ["a_x","@7h","^","*","Aq|"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"460":0,"1.097232841761577e+308":"","Z@|":655,"":5.139547894481405e+307,"=_":"","dr":-1,"2.755192489971786e+307":"l"}
argument5[49] = ""
argument5[1] = ""
return a/b+c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = true
return a/b*c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.0885014435567013e+307] = 157
argument9[893] = null
argument11['AA@'] = null
return a/b-c
};
var base_0 = ["=",595,"X^X","]","V"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",595,"X^X","]","V"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",595,"X^X","]","V"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",595,"X^X","]","V"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test907.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)