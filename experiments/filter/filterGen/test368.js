





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ["t1R","`hIs","Zl","k5$",">"]
base_0[0] = true
return a+b*c
};
var argument2 = [">z:+",627,122,"1",157,25,843,"X"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"59":"{","213":1.706375969313087e+308,"2.430484090584609e+307":893,"":460}
argument5['jo'] = 213
argument5[157] = true
return a+b+c
};
var argument5 = [100,607,969,213,157];
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 5e-324
argument9[403] = ["`","0i","P","G>","h<","[d!","c"]
argument8['A'] = ""
return a+b/c
};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = ""
base_3['filter'] = {"[K":714,"6.103171277503947e+306":"O","1.0013294045010012e+308":"I","1.4861701077421113e+308":"","":5e-324,"H":3.176191082559868e+306,"luX":"O3","Qz":"tKl`"}
argument10[714] = {"655":"Y","Rx":"+"}
return a+b+c
};
var argument10 = true;
var base_0 = ["n9@P",59,"g",">"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n9@P",59,"g",">"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n9@P",59,"g",">"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n9@P",59,"g",">"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)