





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ""
argument3[403] = ""
base_0[0] = null
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = [";","z",":cD","!Ay@","Z","o","V","s"]
argument4[4.224481734419934e+307] = null
return a*b/c
};
var argument4 = {"655":1.5125572232289595e+308,"1.7909913073671624e+308":1.5823749896730273e+308,"8.328829717023045e+307":"*_n","1.1943406884277645e+308":59,"1.3122648183075263e+308":"","`M":1.5564338992922785e+308,"&+Q1NJ ":"n"};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = ["1w","r","i$","I","j","I","^bUo"]
argument7 = {"655":"!*","=":"","G":1.4103002720580894e+308,"":242,"1.6442661634343713e+308":"","}U":5.456465902364063e+307,"Dq":"","E9":"","5.92063410060441e+307":6.076073682982702e+307,"1.7247355707175457e+308":460}
argument6 = null
return a+b/c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 25
argument10[5.262931091360336e+307] = [655,1.7976931348623157e+308]
argument10[7] = 2.6147333999840865e+307
return a/b+c
};
var base_0 = [242,714,823,213,460,126,1.7976931348623157e+308,783,-100,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,714,823,213,460,126,1.7976931348623157e+308,783,-100,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,714,823,213,460,126,1.7976931348623157e+308,783,-100,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)