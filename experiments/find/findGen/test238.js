





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 126
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {"0":-1,"242":655,"":595,"2.702634589961885e+307":1.7713991511018176e+308,"u<":"","1.2290899610830929e+308":"g","-1":"Gr","3.068281371054896e+307":"["}
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = {"157":969,"213":1.6746257215756097e+308,"460":1.7741642883789973e+308,"705":"","969":"t(D","Q[W-":"","@":""}
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = ""
base_3[0] = {"969":"|","1.0455130927269913e+308":705,"":"6","h":"","6.672497583389286e+307":""}
argument6['AO?'] = {"242":"hK9P","":783,"1.1851335643896694e+308":843,"1.386926132106194e+308":"","5.803564617947176e+307":"","i":"","V":"Gl"}
return a-b+c
};
var base_0 = ["1","?","&9z","kY","X"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","?","&9z","kY","X"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","?","&9z","kY","X"]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","?","&9z","kY","X"]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findGen/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)