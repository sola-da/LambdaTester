





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['='] = ""
argument3['W'] = [618,5e-324,823,82,157,705,59,783,242]
return a-b-c
};
var argument2 = 3.425723116195374e+307;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
return a*b*c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['LK'] = "1_+2=M'"
argument8['LK'] = null
argument8['AO?'] = {"460":6.16225071481219e+307,"843":"","893":627,"":607,"r`G}":783}
return a-b-c
};
var argument7 = [893,"x","1","f&S",-100,460,460,157,618];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[242] = ["G","Bp?5",82,714,"j","V",969,"i","t"]
argument9[3][6] = 595
argument9[4] = null
return a-b-c
};
var argument9 = r_3;
var base_0 = ["5",122,"B","4",1.7976931348623157e+308,49,"Qr","[D","?",100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5",122,"B","4",1.7976931348623157e+308,49,"Qr","[D","?",100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5",122,"B","4",1.7976931348623157e+308,49,"Qr","[D","?",100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",122,"B","4",1.7976931348623157e+308,49,"Qr","[D","?",100]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test898.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)