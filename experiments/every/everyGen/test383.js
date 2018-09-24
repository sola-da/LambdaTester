





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = true
argument2[5] = {"59":122,"460":"[w","893":823,"1.218382997714731e+308":"<","":9.2852618722751e+307,"wC":1.408955961717351e+307,"1.3578730731287206e+308":3.684459506670406e+307,"5.947356770287708e+307":122,"1.4221894611786458e+308":"","n":1.7976931348623157e+308}
return a-b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = 823
return a-b+c
};
var argument5 = false;
var argument6 = {"":"","-100":1.278007455719262e+308,"1.0586273388386606e+308":"","1.0230890806496375e+308":"yK","{z":"A*K!","1.4457469990960225e+308":6.281132745235113e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"0":1.2913525229684295e+308,"9":"5I","25":"dB","403":1.7013937788568666e+308,"705":"`","":823,"X-":7.955415878634281e+306,"1.6274473525714684e+308":">g","E":""}
return a-b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = [627,893,"J",59,"L",242,"^"]
argument10[2] = true
return a-b+c
};
var argument9 = null;
var argument10 = null;
var base_0 = ["4dc=t","5","M","<","f","O","#","=","f"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4dc=t","5","M","<","f","O","#","=","f"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4dc=t","5","M","<","f","O","#","=","f"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4dc=t","5","M","<","f","O","#","=","f"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)