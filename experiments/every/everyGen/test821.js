





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = null
argument2[1.6706143966770798e+306] = {"49":4.2591397903246595e+307,"618":460,"714":"W","823":5.377633259486112e+307,"":"",":w{V":82,"-100":1.802077945357351e+307,"1.0539853554203716e+308":"","4.7217949808179213e+306":1.0956292695117396e+308}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = ["%",",ZJS","9:X","ff","B","9","="]
return a+b*c
};
var argument3 = true;
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = "rJF"
argument6[8] = {"25":"","618":"I:","705":-100,"*@":"o?Nt"}
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = 100
argument8[4] = null
return a/b+c
};
var argument7 = null;
var base_0 = [460,100,627,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,100,627,823]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,100,627,823]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,100,627,823]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)