





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"157":9.894716330207792e+307,"":"","Kt":714,"R":1.089449147580639e+308}
return a-b*c*d
};
var argument2 = false;
var argument3 = true;
var argument4 = false;
var argument5 = false;
var argument6 = ["=*","kc","FD{w","=pk","Mv","s"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = "}W1"
base_1[5] = ""
return a/b*c-d
};
var argument8 = {"823":1.7976931348623157e+308,"D":59,"":"Dlbb","4.797078780672375e+307":8.925090471369404e+307,"1.6753396615867485e+308":607,"-100":"","1.6612818576172084e+308":9.62617508552278e+307,"1.715428662376767e+308":607};
var argument9 = null;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3] = {"":"]*1'a"}
return a/b*c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = ""
return a-b*c/d
};
var argument13 = 122;
var argument14 = null;
var base_0 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","ru","]","-``Mz","ZO","M4J#",",6q","C","s"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)