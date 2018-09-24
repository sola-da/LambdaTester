





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = -1
argument1 = {"157":618,"783":705,"":"8","4@":607,"3.5229006456087845e+307":1.0688928330662098e+308,"5.4512073232433296e+306":"","7.702946193494186e+307":"K","1.258549006796611e+307":-100}
return a+b/c
};
var argument2 = "6";
var argument3 = {"655":8.778364932994004e+307,"":1.2592705175795381e+308,"v{":5.119363579392576e+307,"1.611608535938671e+308":" e","5e-324":"","1.1912770837537691e+308":"","1.6410468137656976e+308":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {}
argument5[4.224481734419934e+307] = [-1,242,607,100,783,49,627,82]
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = null
argument6[4] = true
argument5 = {"":1.200030503210087e+308}
return a/b/c
};
var argument6 = true;
var argument7 = {"25":705,"":"","1.7976931348623157e+308":"*","6.409501193209735e+307":213,"1.1419424153903228e+308":"","4.1363472574202606e+307":1.4827179202663585e+307,"1.3941650198920235e+308":1.3880974201329266e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = 242
base_3[1][0] = 1.4053840958519652e+308
argument10[122] = ""
return a*b/c
};
var argument9 = r_2;
var argument10 = true;
var base_0 = ["U8","@_Q","TE","YFO","e","J","="]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U8","@_Q","TE","YFO","e","J","="]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U8","@_Q","TE","YFO","e","J","="]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U8","@_Q","TE","YFO","e","J","="]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test786.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)