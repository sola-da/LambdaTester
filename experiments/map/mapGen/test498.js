





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = {"":893,"M":1.227028449724257e+308}
argument2[3.208837311680636e+307] = null
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = 1.8525699530679595e+307
argument3[3.208837311680636e+307] = ""
return a+b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"A":"q@6"}
base_2[3][2] = ["UN","3i",";h(","0kP","$Kv","e(d"]
base_2[2]['f'] = "B"
return a*b-c
};
var argument5 = {"25":"8","82":213,"213":8.983496058860699e+307,"618":1.1584117753966098e+308,"":893,"&":" ;5q I","s=P_qL":5.882261337767407e+307,"1.7121211182125595e+308":0,"8.075817511952372e+307":1.655055312033454e+306};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2][6] = null
base_3[3][4] = 1.271816630746851e+308
base_3[3][2][5] = false
return a-b-c
};
var argument8 = false;
var base_0 = ["L4Q","9"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L4Q","9"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L4Q","9"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L4Q","9"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test498.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)