





var callbackArguments = [];
var argument1 = 1.0130242133597546e+308;
var argument2 = [595,"@U5",82,705,893];
var argument3 = 7.643608707068147e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = null
base_0 = null
return a*b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = null
return a-b*c*d
};
var argument6 = null;
var argument7 = null;
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 213
argument8[627][126] = 7.955307783616701e+307
argument9[4] = [157,1.7976931348623157e+308,893,618]
return a/b*c+d
};
var argument11 = r_3;
var argument12 = false;
var argument13 = 82;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = {"49":1.282013243351857e+308,"627":"@","893":126,"":783}
argument13[1] = ["R&","rT%","!F","k$G>;","s","KwNN","Fb)>ZK","o;",","]
argument12[25] = ""
return a+b*c/d
};
var base_0 = [25,714,82,"6",618,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,714,82,"6",618,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,714,82,"6",618,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,82,"6",618,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)