





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"122":1.2238933131852547e+308,"607":"R!","1.3012111342136087e+308":""}
base_0[7] = false
argument2[4] = "8"
return a*b*c-d
};
var argument2 = 595;
var argument3 = r_0;
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
return a*b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
base_2[6] = true
base_2[0] = null
return a*b-c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = false
argument9 = null
base_3[1][0] = {"59":82,"100":"e","1.2665491745017196e+308":"K@","Gs8 ":7.86670743446777e+306,"1.1352101087511812e+308":"","":122,"5.76076838714538e+307":1.1212006659341165e+308}
return a-b/c+d
};
var argument8 = r_0;
var argument9 = r_0;
var base_0 = ["X",":;]S+(","A6","S","!","N","l|","f_","7PG","T"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X",":;]S+(","A6","S","!","N","l|","f_","7PG","T"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X",":;]S+(","A6","S","!","N","l|","f_","7PG","T"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X",":;]S+(","A6","S","!","N","l|","f_","7PG","T"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)