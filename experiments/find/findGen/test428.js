





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ";"
argument2[627] = [-100,893,213,460,5e-324,82,893,59,618]
base_0[8][0] = 843
return a/b/c
};
var argument2 = null;
var argument3 = 1.244078254734585e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [25,893,49,5e-324,242,403]
argument6[460] = {"403":"","893":618,"":"",";":"","1.3222620688117873e+308":9.093319114657293e+307,"-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""}
base_1[1] = [893,607]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = {"2.89733948030206e+307":"","-100":49,"":1.1059853882503978e+308,"8.691391245139505e+307":595}
return a/b/c
};
var argument6 = 49;
var argument7 = {"126":"","-@":1.1777561018768243e+308," #":"b","<Gd":"","1.7722917579249007e+308":"c;","5.692616949174869e+307":1.0370899397672074e+307};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 8.284244366008842e+307
base_3[3] = [157,"a","+g","P=",607,595,"&oQ",595,403]
argument9[242] = [126,25,25,714,843,618,213,82,607]
return a+b*c
};
var argument9 = r_1;
var argument10 = null;
var base_0 = [5e-324,705,126,-1,49,823,100,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,705,126,-1,49,823,100,100]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,705,126,-1,49,823,100,100]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,705,126,-1,49,823,100,100]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)