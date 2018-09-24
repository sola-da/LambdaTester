





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 100
return a-b+c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = true
argument5[7] = 5.751994662492476e+307
argument5[1.6706143966770798e+306] = 59
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"59":"","157":"f","213":"4xfDnrL","":"f|Q","1.495878953560599e+308":49,";":"","|$":4.3162298788850126e+307,"1.7976931348623157e+308":"yf","A}Q":1.5447525984409133e+308}
argument6[403] = null
return a*b/c
};
var argument6 = r_1;
var argument7 = [100,-1,5e-324,126];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[783] = ""
argument9[893] = 1.1041661548545186e+308
base_3[5] = {"595":"","714":8.873406043133819e+306,"9.841001647797327e+307":1.4587473511652164e+308,"@":"","5.737665577948909e+307":1.0805493611757923e+308,"":9.388213507930638e+307,"3.9725665041051536e+307":"B,","W+G":783,"8.007223240711915e+307":2.078526740776638e+307}
return a*b/c
};
var base_0 = ["O","e$","pvyN"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","e$","pvyN"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","e$","pvyN"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","e$","pvyN"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)