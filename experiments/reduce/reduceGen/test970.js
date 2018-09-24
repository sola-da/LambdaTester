





var callbackArguments = [];
var argument1 = r_0;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = [893,1.7976931348623157e+308,714,607,59,969,242,49,5e-324]
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = true
return a-b-c+d
};
var argument6 = 7.679041484647644e+307;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1532786076532189e+308] = [242,59,100,403]
argument8[2.1869172855352885e+307] = [25,213,893]
argument9[-1] = {"!K51":213,"":"Qv","9.466367813651268e+306":969}
return a/b*c*d
};
var argument9 = {"":""};
var argument10 = null;
var argument11 = null;
var argument12 = {};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.463432409233234e+307] = {"":9.107604157095806e+306,"8.25785353433006e+307":5e-324}
argument10[9] = false
argument11[1.171692140852735e+308] = 1.314805752384379e+308
return a-b*c-d
};
var base_0 = ["X(",403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X(",403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X(",403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X(",403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)