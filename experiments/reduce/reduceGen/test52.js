





var callbackArguments = [];
var argument1 = 4.535981932380015e+307;
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = null
return a-b*c+d
};
var argument5 = "+4";
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ""
base_1[1] = true
base_1[8] = [627,-1,25,403,213]
return a/b+c+d
};
var argument9 = false;
var argument10 = {"242":1.7976931348623157e+308,"9.401906077600654e+307":7.835778287521954e+307,"2.3541012377522057e+307":8.357766569642445e+307,"1.693390953622872e+308":9.802428591001421e+307,"1.2677376789607652e+308":"E"};
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = null
argument10[4] = 2.8843483651925706e+307
base_2[2] = ""
return a+b+c+d
};
var argument13 = null;
var argument14 = false;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = false
return a/b*c+d
};
var base_0 = ["Ir","-:",":+@","9","XL","<",",>","<"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ir","-:",":+@","9","XL","<",",>","<"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ir","-:",":+@","9","XL","<",",>","<"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ir","-:",":+@","9","XL","<",",>","<"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)