





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 6.726353614522585e+307
argument2[9.869573703797622e+307] = [823,595,59,607,460,100,705,49]
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['A'] = [618,"Z?",595,714,":Xdj1n1","FHn:}"]
return a-b*c
};
var argument4 = 4.065717297211216e+307;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"893":1.2189982772877954e+308,"-BT":"","":59,"H[Y":893,"6.357788157596447e+307":""}
argument8[714] = {"1.4152594606946776e+308":"J","aq":"PAgbyPm","":"5","8.964412382354262e+307":"","1.7352872966023471e+308":783,"6.308864418227777e+306":7.758874326316483e+307,"B":4.850459238327186e+307}
argument7[2] = true
return a*b/c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = ["1s","r","a",";","-d"]
base_3[8] = [627,-100,969,705]
argument9[618] = false
return a-b-c
};
var base_0 = ["^",5e-324,"o","W",59,705,0,"Y18"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^",5e-324,"o","W",59,705,0,"Y18"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^",5e-324,"o","W",59,705,0,"Y18"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test248.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)