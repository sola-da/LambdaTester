





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = {"122":7.918079119738196e+307,"d;":"DW","1.7654507170360786e+308":8.58419377129611e+307,"5.151281583405768e+307":"Mw","5.161428508353649e+307":705}
base_0[1][3.5329845145600404e+307] = 6.508134274220023e+307
return a-b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = ["q"]
argument5['f'] = null
argument5[9.869573703797622e+307] = null
return a+b-c
};
var argument5 = null;
var argument6 = {"403":"5[","7.941884035747553e+307":1.0091096972915812e+308,"":6.518508923389424e+307,"]":"","4.464936367497225e+307":1.2626535060489396e+308,"c":"","8.291174058912292e+306":"znS"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
return a-b+c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3.5329845145600404e+307] = false
argument10[0] = [122,157,25,242,"O"]
base_3[7] = [627,100,705,655,213,969,460,1.7976931348623157e+308,157]
return a*b+c
};
var argument10 = ["q","hi",843,"P","IA","c","wp",595];
var argument11 = 4.585972364472588e+307;
var base_0 = ["v)X","X`","%Z","%Yq","K#Wh6","q",",","dR#=","YJW","3B"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v)X","X`","%Z","%Yq","K#Wh6","q",",","dR#=","YJW","3B"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v)X","X`","%Z","%Yq","K#Wh6","q",",","dR#=","YJW","3B"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v)X","X`","%Z","%Yq","K#Wh6","q",",","dR#=","YJW","3B"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test842.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)