





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = {"25":82,"213":"","655":49,"714":6.160501135410356e+307,"893":"$3","MDd":8.647299784258173e+307,"":893,"5.976730883445392e+307":">","1.0485700963424222e+308":126}
return a*b*c*d
};
var argument2 = false;
var argument3 = false;
var argument4 = 893;
var argument5 = 7.02544999789725e+307;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ""
argument4 = true
return a*b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = [157,1.7976931348623157e+308]
return a*b+c+d
};
var argument9 = {"3":"lO1","969":893,"1.761811980200124e+308":"","1.5466706922871835e+308":7.305952014860319e+307,"1.6192748375780026e+308":5.365209660229085e+307,"8.265820712619537e+307":"R"};
var argument10 = [25,705,82,969,82,1.7976931348623157e+308,893,82,595];
var argument11 = {"59":"","122":"wD","403":"H,","823":"J2","893":100,"":"","_":"9","#":213,"1.2430793935574018e+308":1.2561619700859141e+308,"1.4937292585038177e+308":"="};
var argument12 = 122;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[8] = -100
argument13[0] = 59
return a-b-c/d
};
var base_0 = [" ","H$k]","@",":z!","$!","[9","H"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ","H$k]","@",":z!","$!","[9","H"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","H$k]","@",":z!","$!","[9","H"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","H$k]","@",":z!","$!","[9","H"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test711.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)