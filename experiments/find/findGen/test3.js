





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"59":"","@z":",","1.889650785832688e+307":""}
base_0[2] = null
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"0":"=v","2":1.2215858579413061e+307,"82":1.7112633077306521e+308,"607":"","705":5.069830540616556e+307,"893":1.4536617123292348e+308,"1.7976931348623157e+308":";","":"'","1.5960736029641476e+308":"d","f":1.4491847584408095e+307}
argument3 = false
return a*b/c
};
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"403":"","595":1.1266870669512564e+308,"783":"","9.323435168156194e+307":7.530607368672627e+306,"4.3055675149882927e+307":1.3463009577694051e+308,"":8.143137626455915e+307,"9p":"!","1.2260543441987487e+308":""}
argument7 = null
argument7 = {"122":59,"460":5.835197543437586e+307,"":0,";|tg=":1.4649544490428012e+308}
return a+b-c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
argument9 = false
return a+b/c
};
var argument8 = {"126":25,"6.382087731709307e+307":"6","A":1.7038149984038752e+308,"":"3Re","s":"X","6.112554473756846e+307":1.5870976240427908e+308,"1.4537905018560516e+308":"(","6.274704700864123e+306":"f","GiN":1.6048908450819008e+307,"1.6798476101238045e+308":""};
var argument9 = false;
var base_0 = ["{","@","X"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","@","X"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","@","X"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{","@","X"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test3.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)