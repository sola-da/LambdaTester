





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AO?'] = 8.693157132357703e+307
base_0['length'] = "@c%"
base_0[4] = {"122":1.172633912428888e+308,"213":5e-324,"1.0651304386317435e+308":",","d":"' &{q%Tu","3.068704069596794e+307":"","7.469146188592346e+307":1.138784297350255e+308,"rJ":4.034722119988351e+307,"":"-","Sh":""}
return a*b-c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = "["
base_1[4] = null
return a+b+c
};
var argument5 = null;
var argument6 = {"":"","^H":823};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = true
argument7[4] = false
argument9[969] = {"":783}
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.399309004356655e+308] = ""
base_3 = ["h",126,"=)=",1.7976931348623157e+308,5e-324,969,"5W",618]
base_3[0] = [82,"h","3",969,"P8c","H","B"]
return a+b*c
};
var base_0 = [1.7976931348623157e+308,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,242]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,242]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,242]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test562.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)