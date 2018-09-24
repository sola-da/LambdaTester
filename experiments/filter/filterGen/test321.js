





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = false
argument2[2] = [705,823,893,126,618,25,122,49,5e-324]
argument2[5] = true
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5.262931091360336e+307] = 969
argument4[3] = false
return a*b/c
};
var argument3 = null;
var argument4 = {"59":"","783":6.121199654607636e+307,"":1.5102689216766122e+308,"1.0902041742059232e+308":5.923727676315281e+307,"9.276128693106102e+307":8.986242296863679e+307,"1.2320466294413898e+308":-100,"3.100469342233111e+307":5.12316390416774e+307,"8.396842967612193e+307":5.945519272307156e+307};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][5e-324] = ["S","7","w"]
return a*b-c
};
var argument6 = {"59":1.661288223149329e+308,"655":157,"Yr2":714,"9.048929582594475e+307":1.0064300495985859e+307,"-":1.1072290059904184e+307,"5.701087099200098e+307":1.4257664044573817e+308,"8.522853779739655e+307":"<w"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = null
base_3[3][0] = false
argument8[1.1679954109349114e+308] = null
return a*b*c
};
var argument8 = true;
var argument9 = 8.834582898219886e+307;
var base_0 = [823,"fQ","7W",82,460,"v"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"fQ","7W",82,460,"v"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"fQ","7W",82,460,"v"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"fQ","7W",82,460,"v"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test321.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)