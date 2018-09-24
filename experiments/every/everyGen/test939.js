





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = 1.5573017888311237e+308
return a+b-c
};
var argument2 = [" ","N","_","K","@","y","oE","j","t","T"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = [403,460,823,82,823]
return a*b*c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[783] = {"49":5.516014310668697e+306,"":",N","d":"","5.369923663674713e+307":""}
return a-b*c
};
var argument6 = null;
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6.148642213884202e+307] = {"126":1.6061133470939535e+308,"403":"0","dbFYQ":"{lEm","1.1036506728863365e+308":1.362542505628538e+308,"B":""}
base_3[0][6] = ""
argument8[122] = ["7","F"]
return a*b*c
};
var base_0 = ["4ye$","a",783,122,"S","(T|;oI"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4ye$","a",783,122,"S","(T|;oI"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4ye$","a",783,122,"S","(T|;oI"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4ye$","a",783,122,"S","(T|;oI"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)