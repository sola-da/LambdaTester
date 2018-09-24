





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = [595,1.7976931348623157e+308,"I}",126]
argument2[1.399309004356655e+308] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
argument4[460] = false
return a/b/c
};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
base_2[4] = 8.213745168718343e+307
return a/b-c
};
var argument5 = {"82":5.999466052988224e+307,"893":"Fg$C[","":"W","5.232113048211444e+307":"","U":1.6380575413224504e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"1.1233336169851681e+308":"","":122,"1.3869666958806344e+308":"f[","O":"%x","1.3728652255485612e+308":""}
argument8['LK'] = -1
argument8[3] = {"49":4.275756346154033e+307,"":1.7976931348623157e+308,"9.366947936551063e+307":595,"y":""}
return a*b*c
};
var base_0 = [655,242,823,823,1.7976931348623157e+308,607,595,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,242,823,823,1.7976931348623157e+308,607,595,618]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,242,823,823,1.7976931348623157e+308,607,595,618]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,242,823,823,1.7976931348623157e+308,607,595,618]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)