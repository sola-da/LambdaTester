





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = 59
base_0[3] = true
argument2['f'] = 49
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.869573703797622e+307] = {"627":1.7976931348623157e+308,"969":"#","":"","1.4083573983053068e+308":"","-1":1.477458338265528e+308,"%":1.719295487726514e+308}
base_1[3][1] = {"969":655,"5.145299809103469e+307":823,"2.1811055068842337e+307":"a","3.4113679205275387e+307":"1O4"}
argument4[3] = null
return a/b+c
};
var argument3 = null;
var argument4 = 1.6561451932727983e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
argument6[82] = {"82":"Bp7","`C":"","":969}
return a-b+c
};
var argument6 = ["$<(",460,"CfnDLJiE"];
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = null
return a*b-c
};
var argument9 = r_3;
var argument10 = {"82":"","783":783,"":59,"1.559078220923285e+308":"",">l":-100,"7.599380035382065e+307":"p{&","1.080087650979422e+308":""};
var base_0 = ["*","^hkr",-1,"Nbi",59,"JeXf"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","^hkr",-1,"Nbi",59,"JeXf"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","^hkr",-1,"Nbi",59,"JeXf"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test397.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)