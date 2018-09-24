





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = [823,823,783,0,1.7976931348623157e+308,460,705,823,213,969]
argument3[2] = {"59":"<","122":"","403":"","655":"^","705":1.110070075513712e+308,"823":"aLd","1.3691169762308474e+308":5.63054395788808e+306,"":"","4.813795649424413e+307":"f"}
argument2['f'] = false
return a-b-c
};
var argument2 = [595,595,618,655,607,618,460,618,5e-324];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"157":7.643332544836358e+307,"403":"","843":9.828483357200503e+307,"":"","3.5329845145600404e+307":122,"y":"#5"}
return a+b-c
};
var argument5 = [82,-1,460,213,627,242,242,618,126];
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1]['d'] = {"59":122,"":"","%":"|","&":"","Sc@":""}
return a/b-c
};
var argument8 = "p";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[6] = [618,";","5",655,-1,714,"F","@","5"]
return a+b+c
};
var argument10 = "";
var base_0 = [59,627,595,122,618,595,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,627,595,122,618,595,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,627,595,122,618,595,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test620.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)