





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
return a/b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = {"25":"","122":"","1.7513275487828838e+308":"g","":"","6.662035277069856e+307":1.3949919502493468e+308,"2.32961323776753e+307":"Q:1","7.419531624425143e+307":"o"}
argument4[4] = false
return a-b-c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7][4] = {"714":"","7.574072499800435e+307":1.1270388478207307e+308,")|":"QR,"}
base_2[9] = false
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['K'] = {"595":"'","D":"","":969,"+]Y":9.527735341699312e+307,"1.5113086650967226e+308":969}
base_3[1][1] = true
base_3[4][2] = {"25":"","126":"","595":"","1.1984634260071844e+308":"h","bk":""}
return a+b+c
};
var argument8 = null;
var argument9 = "s";
var base_0 = [893,460,893,783,843,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,893,783,843,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,893,783,843,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test854.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)