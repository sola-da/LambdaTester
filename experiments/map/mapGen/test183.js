





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [460,82,-100,823,213,157]
return a/b*c
};
var argument2 = true;
var argument3 = {"59":"","":"","S":"","4.1206974229972455e+307":"","1.0601777204465004e+308":"n[b","2.1128937280488696e+307":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[49] = 1.4693374386821275e+308
argument6[714] = 9.107440840152203e+306
return a-b-c
};
var argument5 = {"157":"","969":1.3546154335868013e+305,"u":1.1086026056542649e+308,"r":"eZS","":"","x]i9":"","1.4616409093903028e+308":"Cb","{":"","nS1":"_7"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[157] = [213,-1]
return a/b/c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[618] = {"Wv?`":1.6119467414952539e+307,"-100":"|("}
argument10[1] = {"126":"","705":1.1582319597782724e+308,"N":1.3674176461986992e+308,"p!":"a3d","":9.35302536294243e+307,"l9":893,"v&@D":2.8994247103683885e+307,"x":"","R":"WDb3j","?9m6;;":595}
return a-b+c
};
var argument9 = false;
var base_0 = [460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
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
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapGen/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)