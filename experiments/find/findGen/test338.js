





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = ["9","Gg[","X","7w","x","Y",":","S30@"]
return a*b/c
};
var argument2 = ["w",")","L","M"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ["HH","m",";czy",25,"2","Q",595,"l","r"]
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.377960715099946e+307] = null
base_2 = [25,607]
return a/b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = {"4":-1,"i2J>":4.554259316965665e+307,"":"","C":1.2142552952737815e+308}
argument7[3.7668525981726295e+307] = [823,0,403,893,595,-100,893,783]
argument7[8] = ""
return a/b-c
};
var argument7 = "";
var base_0 = [783,"`","`","C:","II",126,"5","7"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"`","`","C:","II",126,"5","7"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"`","`","C:","II",126,"5","7"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"`","`","C:","II",126,"5","7"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)