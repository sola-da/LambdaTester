





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = null
base_0[1][7] = true
return a-b-c
};
var argument2 = 8.88469828919911e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument4[-1] = {"3.9346955918469723e+307":"8"}
argument5[403] = 242
return a+b/c
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AO?'] = null
return a/b*c
};
var argument7 = [1.7976931348623157e+308];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = 7.263711608845939e+307
argument9[1] = 1.1401045609684315e+308
argument9[1.399309004356655e+308] = ["$T","{U","u",">7x","D","8t","fJc"]
return a/b/c
};
var argument9 = [1.7976931348623157e+308,843];
var base_0 = [25,25,893,-100,783,607,82,59,403,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,25,893,-100,783,607,82,59,403,242]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,25,893,-100,783,607,82,59,403,242]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,25,893,-100,783,607,82,59,403,242]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test737.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)