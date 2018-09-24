





var callbackArguments = [];
var argument1 = "";
var argument2 = [893,655];
var argument3 = {"1.62372344062075e+308":2.0133222606420238e+307,"2.111684696768346e+307":"","1.7976931348623157e+308":"(+"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = false
base_0[0] = 6.938786848811175e+307
argument3['18{'] = 607
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
return a+b+c+d
};
var argument6 = false;
var argument7 = false;
var argument8 = null;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['18{'] = 9.848044838573904e+306
argument9[627] = false
base_2['length'] = true
return a/b/c*d
};
var argument11 = {};
var argument12 = r_3;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[1.359136872727139e+308] = ["t","v","]","yIH"]
argument13[1.359136872727139e+308] = null
argument12[5] = true
return a+b*c+d
};
var base_0 = [122,157,157,-100,"}t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,157,157,-100,"}t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,157,157,-100,"}t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,157,157,-100,"}t"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)