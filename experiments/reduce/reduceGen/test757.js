





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[9] = null
return a*b/c*d
};
var argument2 = false;
var argument3 = null;
var argument4 = false;
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6.35085648319999e+307] = false
argument5[59] = ""
argument4[213] = false
return a+b-c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.3938918493123786e+308] = ""
argument8[5] = 1.2216498563514636e+308
argument8[213] = [157,126,618,5e-324,705,100]
return a-b*c-d
};
var argument8 = null;
var argument9 = null;
var argument10 = null;
var argument11 = null;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = {"460":5.449171971050974e+307,"1.4564984917902785e+308":5.869980456888704e+307,"s":"","1.1570646153027964e+308":"g","3.527395572928487e+307":714,"f":7.550670353815108e+307}
argument11[0] = ["O",595,122,242,893,893,969,"T"]
argument12[7.889879335222838e+307] = 627
return a*b+c*d
};
var base_0 = [627,607,213,460,607,59,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,607,213,460,607,59,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,607,213,460,607,59,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,607,213,460,607,59,100]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test757.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)