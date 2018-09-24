





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = null
argument2[627] = {"59":460,"1.3348262946963748e+308":"eK",":E":"","@V":1.5740098833165188e+308,"1.1397250880058809e+308":""}
argument2[0] = [82,242,893,969]
return a/b+c/d
};
var argument2 = false;
var argument3 = "";
var argument4 = r_1;
var argument5 = [618,59,893,595,242,783,595,618,607,627];
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"0":714,"403":126,"618":"","1.2666588453026953e+308":1.3815060912629851e+308,"w?":"n","&aEHxo":"25aQplu","o":6.07867324724749e+306,"":1.6954864375518318e+308,"9.266058894692924e+307":""}
base_1[8] = {"126":"L2","":618,"3.092293954282442e+307":"8","1.2129001274577625e+308":"","Y":"_m","m&":-1}
return a*b+c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
base_2[1][3] = ""
return a*b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 242
return a/b-c+d
};
var argument10 = {"100":5.067220782675951e+307,"403":"","595":893,"969":"","":",,","wE":5.900533629595638e+307,"IHAD":607};
var argument11 = "fP:LW";
var base_0 = [893,126,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,126,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,126,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,126,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)