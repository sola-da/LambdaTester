





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = null
argument3[-100] = {"0":893,"59":1.3737798833791212e+308,"157":"Ug=<Y","":"Q","I7l`":"Q|","2.892563297668263e+307":"","(K,mz":2.7105034217172984e+307,"2.0663400047922938e+307":"(V","3.923581699300517e+307":"","9.962450969920737e+307":9.559299470061702e+307}
argument3[3] = 714
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"YtV":"x","7.537050580222839e+307":5.16820800597853e+307,"7.950493578712548e+307":3.2596950855186136e+307,"":"","JG":"|","1.3550767937506721e+308":49,"1.6690329007586956e+308":"","1.0807038080568784e+308":"S03]d[",";|":1.0347269594555272e+308}
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = [0,783,242,714,607,969,595,893]
argument5[5.262931091360336e+307] = ["Jy3","lp","99","8Gz","j","l","# |","R"]
return a/b/c
};
var argument4 = 3.3079463266803157e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.7847438319683965e+308] = "[q"
return a-b+c
};
var argument6 = r_1;
var base_0 = [82,1.7976931348623157e+308,213,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,1.7976931348623157e+308,213,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,1.7976931348623157e+308,213,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,1.7976931348623157e+308,213,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)