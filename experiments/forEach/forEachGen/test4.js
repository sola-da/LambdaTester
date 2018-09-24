





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["X%9","+jy"]
base_0[4] = null
base_0[4] = false
return a*b/c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
base_1[3] = {"122":59,"460":5.835197543437586e+307,"":0,";|tg=":1.4649544490428012e+308}
return a*b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = null
base_2[3] = false
return a+b/c
};
var argument7 = {"126":25,"6.382087731709307e+307":"6","A":1.7038149984038752e+308,"":"3Re","s":"X","6.112554473756846e+307":1.5870976240427908e+308,"1.4537905018560516e+308":"(","6.274704700864123e+306":"f","GiN":1.6048908450819008e+307,"1.6798476101238045e+308":""};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = 893
base_3 = true
argument11 = false
return a+b+c
};
var argument10 = null;
var base_0 = [655,618,627,213,-100,823,25,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,618,627,213,-100,823,25,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,618,627,213,-100,823,25,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,618,627,213,-100,823,25,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test4.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)