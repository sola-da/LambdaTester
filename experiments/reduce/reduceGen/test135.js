





var callbackArguments = [];
var argument1 = 3.908545746464887e+307;
var argument2 = null;
var argument3 = 100;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = false
return a+b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = 705
return a+b+c*d
};
var argument6 = null;
var argument7 = 1.506819951020529e+308;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
base_2[1] = {"25":7.013594759393452e+307,"627":"J","714":705,"893":1.5922502641735272e+308,"|":-100,"":1.5718390478624246e+308,"I`<":"dd","-100":618,"3.000277390297487e+307":1.5171480389601577e+308}
return a/b*c/d
};
var argument10 = r_2;
var argument11 = true;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = 1.3283983065299699e+308
base_3[1] = false
argument10 = {"595":823,"ez]":"8e","x&O@":"","yrr":"","3.454648788484347e+307":"u","1p;":1.2496009928015157e+308}
return a/b/c+d
};
var base_0 = [403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)