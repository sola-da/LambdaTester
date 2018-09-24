





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"403":"","7.492173329512282e+307":"","{":"","|":":&WS","":"","1.4906043688204198e+308":5.293199890910709e+307}
return a/b/c
};
var argument2 = "";
var argument3 = 1.0818156779586243e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = -1
argument5[2] = {"W":607,"":"","p":5.497514877795282e+307}
return a-b*c
};
var argument5 = "Q";
var argument6 = ["t#","Y;Q","0","Q?","le"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7121211182125595e+308] = "1"
argument8[1] = null
return a+b+c
};
var argument8 = true;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.3434821406183095e+308] = {"59":1.4261263031683199e+308,"":"d"}
argument12[126] = null
base_3[0][3] = null
return a-b-c
};
var argument11 = 403;
var base_0 = [-1,1.7976931348623157e+308,893,-100,823,25,213,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,893,-100,823,25,213,607]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test816.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)