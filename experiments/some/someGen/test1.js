





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = "7_"
return a+b/c
};
var argument2 = false;
var argument3 = 823;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = false
argument5 = {"59":"","843":"E","'X":1.1267601836742876e+308,"":"","5.94688564289009e+307":1.4166020162917514e+308,"1.0990992491305399e+307":82}
base_1['length'] = "1hxnc"
return a+b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = false
base_2[2] = "F:{h0"
argument8 = 2.422485656875276e+307
return a/b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
base_3[1] = [-1,1.7976931348623157e+308]
return a-b-c
};
var argument9 = true;
var argument10 = r_0;
var base_0 = [59,"8^0",100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"8^0",100]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"8^0",100]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test1.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)