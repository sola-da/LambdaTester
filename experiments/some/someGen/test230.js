





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = null
argument3 = 25
base_0['length'] = [1.7976931348623157e+308,969,893,213]
return a/b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['5L'] = {"7.08646358139404e+307":"",",":"!p*mW0","":627,"9.266058894692924e+307":"",">A":3.092293954282442e+307}
base_1[1]['{X'] = null
return a/b+c
};
var argument4 = r_0;
var argument5 = ["A7$ne","Q<","$","m","F","&","u"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5e-324] = null
argument7[5] = null
base_2[0] = ""
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = 25
argument8[0] = "x"
return a*b+c
};
var argument8 = r_2;
var argument9 = null;
var base_0 = [714,0,403,-1,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,0,403,-1,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,0,403,-1,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,0,403,-1,1.7976931348623157e+308,893]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)