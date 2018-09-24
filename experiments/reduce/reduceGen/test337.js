





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[59] = false
argument2[1.1277822633002616e+308] = false
return a*b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['18{'] = {"823":1.5289972034042236e+307,"-1":"7;2"}
return a*b/c-d
};
var argument3 = {"WY":",","w`B4j":"WA","":""};
var argument4 = ["c","$O","-f"];
var argument5 = false;
var argument6 = 126;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = false
base_2[0][3] = ""
argument5[0] = true
return a*b*c-d
};
var argument8 = "";
var argument9 = null;
var argument10 = r_1;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[';N'] = [122,")","X3","ixT$","@",843,"V2"]
argument9[3] = false
return a/b-c/d
};
var base_0 = [")(","a","_#DJw","]","o","d|+"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")(","a","_#DJw","]","o","d|+"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")(","a","_#DJw","]","o","d|+"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")(","a","_#DJw","]","o","d|+"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test337.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)