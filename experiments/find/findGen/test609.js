





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][7] = {"82":1.7976931348623157e+308,"714":1.7959500000966516e+308,"1.1946850550627824e+308":"H","W=":1.509670902971125e+308,"3.683897598632827e+307":126,"":618,"8.627728920272564e+306":"","e<)":969,"9.843237426656786e+307":"Q,"}
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AA@'] = {"25":7.323439055083916e+307,"49":"@We","460":"!","595":"","618":714,"893":49,"969":"!","1.6510229711451059e+308":893,"":126}
return a/b-c
};
var argument3 = 5.888311605643405e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = ["F%","S7","-"]
argument5[3] = true
base_2[8][0] = null
return a*b+c
};
var argument5 = true;
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = null
argument9[3] = null
base_3['length'] = true
return a*b-c
};
var argument8 = r_3;
var argument9 = r_3;
var base_0 = [82,-1,893,893,59,783,1.7976931348623157e+308,122,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,893,893,59,783,1.7976931348623157e+308,122,783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,893,893,59,783,1.7976931348623157e+308,122,783]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,893,893,59,783,1.7976931348623157e+308,122,783]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)