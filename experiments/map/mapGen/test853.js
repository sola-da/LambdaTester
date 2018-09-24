





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = {"49":"","242":4.952800885774694e+307,"":"","Nb3G":"`i&"}
return a+b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = 655
base_1[3][3] = [-1,-1]
return a/b*c
};
var argument4 = {"":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.7173047913506838e+308] = {"1.2899001779014793e+308":607,"_":783,"1.3257123493485206e+307":"R","S":1.5894780990185078e+308,"1.3129768618158625e+308":6.102550735858066e+306,"":"","Cp":126,"1.7349794352000907e+308":"b","6.957023047568698e+307":595}
return a*b/c
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = {"100":3.5448032933345895e+307,"714":"","783":1.3629386807792117e+308,"2.928739944460171e+307":1.3320934785528937e+308,"":"%r","`Y;":8.399354162065999e+307}
argument10[7] = 9.474658212429112e+307
return a-b*c
};
var argument9 = true;
var base_0 = ["H!","o","q",82,"!8tt","=,s",")1E"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H!","o","q",82,"!8tt","=,s",")1E"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H!","o","q",82,"!8tt","=,s",")1E"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test853.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)