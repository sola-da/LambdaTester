





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [-1,-1,783,59]
base_0[9] = null
argument2 = {"3.411500715464612e+307":";s&yv(","8.404230556325729e+307":893,"N":1.0364904167393744e+308,"6.458824692350761e+307":25,"1.5871414587560982e+308":"","5.567868593008714e+307":7.015785779997418e+307,"7.994445146835088e+307":"km"}
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = "p"
base_1[2] = ["]","=Y>P","TE|",157,122,82,1.7976931348623157e+308]
argument3[1] = null
return a+b*c
};
var argument3 = ["A","af","N","sOwMuo","Y","j","sG","b"];
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7.92397107964922e+307] = [-1,122,49]
base_2[5] = "5"
base_2[3][1.3434821406183095e+308] = null
return a/b/c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"460":1.7225810522066861e+308,"9.051335159139241e+307":"K","5.094771876806349e+307":157,"G":-1,"":823,"6.415799832835954e+307":"TD","n":"","Aa":714,"1.0847806651105625e+308":"V"}
argument9 = ""
base_3[0][823] = {"618":"","823":"0","WM":655,"0o^}<":"","2.192361705615646e+307":"","6.043973614839838e+307":843}
return a-b+c
};
var argument8 = false;
var argument9 = 7.186465752856058e+307;
var base_0 = ["J","+","M","[=,","gF","!BO","6","L","zr","K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","+","M","[=,","gF","!BO","6","L","zr","K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","+","M","[=,","gF","!BO","6","L","zr","K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","+","M","[=,","gF","!BO","6","L","zr","K"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)