





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = {"":893,"M":1.227028449724257e+308}
argument3[1.7847438319683965e+308] = null
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = 1.8525699530679595e+307
argument4[1.7847438319683965e+308] = ""
return a+b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"A":"q@6"}
base_2[1][2] = ["UN","3i",";h(","0kP","$Kv","e(d"]
argument5[893] = "B"
return a*b-c
};
var argument5 = {"25":"8","82":213,"213":8.983496058860699e+307,"618":1.1584117753966098e+308,"":893,"&":" ;5q I","s=P_qL":5.882261337767407e+307,"1.7121211182125595e+308":0,"8.075817511952372e+307":1.655055312033454e+306};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = null
argument8[4] = 1.271816630746851e+308
base_3['filter'] = false
return a-b-c
};
var argument8 = false;
var base_0 = ["L4Q","9"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L4Q","9"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L4Q","9"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L4Q","9"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test507.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)