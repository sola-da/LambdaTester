





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"7":"","":"v","6.23279005338668e+307":9.093899388522963e+307,"VS":-100,"k":783,"1.6471469635778256e+308":-100,"9.70526801664585e+307":"h"}
argument2[0] = {")":"","w":1.240983091445187e+308,"":""}
base_0[6][4] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = false
base_1[2] = 1.0057194269426143e+308
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"25":"fB{&","714":2.4044352599181386e+307,"m S":7.743037486916942e+307,"6.473123347753847e+307":6.891395815610235e+307,"":6.819737698366247e+307,"|eMN":82,"Ya^":-100}
base_2[0][0] = {"":4.282066024094841e+307,"7.625642843406253e+307":705}
return a*b+c
};
var argument4 = false;
var argument5 = 783;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 8.706222732034707e+305
base_3[0] = {"59":"bs:","607":5e-324,"893":403,"8.294393601785119e+307":1.7976931348623157e+308,"":"%$]","0N":3.311912044279604e+307,"m":"w8","1.0141525046207299e+308":"","-1":7.00920347979095e+307,"7.049913393054718e+307":"hO5"}
return a*b/c
};
var argument7 = ["tHel<z","|","-","W","ll","!","a","+","u"];
var argument8 = [126,823,82,460,"nJ-1",-100,705,"g","gQ"];
var base_0 = [25,0,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,0,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,0,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,0,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test198.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)