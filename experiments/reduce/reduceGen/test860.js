





var callbackArguments = [];
var argument1 = {"":823,"!v":3.267021911367124e+307};
var argument2 = 9.797369618998774e+307;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = false
return a*b/c-d
};
var argument5 = true;
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = ""
return a*b*c*d
};
var argument9 = "";
var argument10 = null;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = false
return a/b-c-d
};
var argument13 = 823;
var argument14 = "";
var argument15 = {"25":1.0370123296662687e+308,"403":"#p2","595":9.102892068611239e+307,"3.5929099107444724e+307":"@","":"","g":1.128565134594811e+308,"1.1784363251067669e+308":8.836580630298846e+307,"&|":"2M","0v":25};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.612812046173122e+308] = {}
base_3['length'] = {}
base_3 = ["X",",58W","gt",823]
return a-b/c/d
};
var base_0 = [403,157,714,969,122,595,823,783,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,157,714,969,122,595,823,783,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,157,714,969,122,595,823,783,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,157,714,969,122,595,823,783,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)