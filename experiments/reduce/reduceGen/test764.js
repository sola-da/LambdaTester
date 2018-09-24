





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = {"59":2.0560813226799677e+307,"82":8.933025993439269e+307,"969":"","!<":"cC8","Iz":1.1402067458454941e+308,"2.8149108068124184e+307":"","+":3.74681135335465e+307,"":2.9647006567479373e+307}
argument2 = [49,893,705,403,-100,705,242,1.7976931348623157e+308,100]
return a/b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.331954948603684e+307] = "va*JcME"
return a-b-c+d
};
var argument6 = [595,893,25,403,122,893];
var argument7 = true;
var argument8 = r_0;
var argument9 = r_0;
var argument10 = [126,59,122,213,122,5e-324,25];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = {"126":1.7146078972333366e+308,"618":403,"":"","8.044353814023839e+307":460,"2.0611640621341393e+307":122,"1.533032652672645e+308":"","1.7976931348623157e+308":""}
argument10['18{'] = ""
return a+b/c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1.612812046173122e+308] = "Y"
argument13[2] = 3.8111221675732446e+306
argument14[59] = ["<MST!)nO",49,"2",1.7976931348623157e+308,"O","e$","pvyN"]
return a-b/c+d
};
var argument13 = r_0;
var base_0 = [100,969,843,25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,969,843,25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,969,843,25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,969,843,25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)