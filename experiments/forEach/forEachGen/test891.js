





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = null
return a*b/c
};
var argument2 = {"100":"*&","213":"","242":"","607":"_","618":460,"1.3584930729629685e+308":"w","":705,"7.25626150253652e+307":"R","1.055742945364405e+308":""};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.3434821406183095e+308] = {"969":1.2369633375377587e+308,"":"|","7.807084192351288e+306":9.710196893877117e+307,"6.514448339649708e+307":""}
base_1[0][4] = null
base_1[5] = null
return a-b+c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = true
argument8[2] = 82
return a-b/c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[460] = 6.078513447278193e+307
argument10[1.7394185942769049e+308] = 6.042663415266075e+307
return a+b/c
};
var argument10 = null;
var argument11 = {};
var base_0 = [82,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)