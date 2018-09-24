





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3][3] = true
argument3[403] = ["&",595,213,"sC",460,893,"q","t","j"]
argument2[4] = {"":893,"1.630916160944558e+308":"","5.981349893725596e+307":"r"}
return a*b*c
};
var argument2 = null;
var argument3 = [59,714];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 969
argument6[9.551053197482062e+307] = null
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][6] = {"3J":"QT$?L","1.6919443619929494e+308":705,"":9.479250107286843e+307}
base_2[4] = false
base_2[1][8] = ["<O","wi","w7TJ","JT|w","7P","N"]
return a/b*c
};
var argument7 = r_2;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = [82,705]
return a-b/c
};
var base_0 = ["W","R{","N","A]","Cvw","LTj","mJ","4","Z3","3"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","R{","N","A]","Cvw","LTj","mJ","4","Z3","3"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","R{","N","A]","Cvw","LTj","mJ","4","Z3","3"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","R{","N","A]","Cvw","LTj","mJ","4","Z3","3"]
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
require("fs").writeFileSync("./experiments/some/someGen/test742.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)