





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
argument3[618] = null
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][6] = {"6":783,"":82,"1.7976931348623157e+308":"","1.018549256542856e+308":""}
return a+b*c
};
var argument3 = ["_!_","2"];
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"893":"","":7.800299702407459e+307,"$@":""}
base_2[2] = {"-1":-1}
argument6[49] = {"213":1.5838780771944055e+308,"(":"","5.149192707557333e+307":"|Jv","8.639972528763326e+307":"","":1.4047632419400668e+308,"1.7503299076721953e+308":705}
return a/b+c
};
var argument6 = r_2;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = ["_3",25,627]
argument10[3] = ""
return a+b-c
};
var argument9 = "";
var argument10 = {"607":82,"1.8021998928698314e+307":"8","":783,"-100":"+","Ucu3#":"","7.016983424121191e+307":""};
var base_0 = [-100,618,1.7976931348623157e+308,213,705,595,969,157,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,618,1.7976931348623157e+308,213,705,595,969,157,655]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,618,1.7976931348623157e+308,213,705,595,969,157,655]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,618,1.7976931348623157e+308,213,705,595,969,157,655]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test812.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)