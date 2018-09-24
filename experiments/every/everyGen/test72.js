





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 1.1742890938182651e+308
base_0['length'] = ["h[_","3v-= H"]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 49
argument3[3.3156198695370476e+307] = ""
base_1[5] = {"":1.5979661748845026e+307,"1.3497591032719683e+307":126,"3.8456762703139753e+307":"!","1.2221099017977437e+308":1.3924099851165772e+308}
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = "N"
argument4[2] = 25
base_2[1] = null
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
argument5[2] = [607,25,705,714,843,595,100,403,627]
argument5[0] = {"25":1.6856339281610902e+308,"59":6.052477349827236e+307,"714":"","843":4.3614755335232507e+307,"":"","1.0481797599457545e+308":"","1.6211862347331925e+308":-1,"1.4205972444974577e+308":122,"V":59,"1.842833136430851e+306":607}
return a+b+c
};
var base_0 = ["c}"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c}"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c}"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c}"]
var r_3= undefined
try {
r_3 = base_3.every(argument4)
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
require("fs").writeFileSync("./experiments/every/everyGen/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)