





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[969] = null
return a/b-c
};
var argument2 = ["bL*oe",893,"T","*"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = ["1W","P","qTS)","Y","S","TDpN","O1"]
return a/b/c
};
var argument4 = {"705":"","893":1.5054756551265805e+308,"7.305952014860319e+307":1.6192748375780026e+308,"5.365209660229085e+307":8.265820712619537e+307,"R":969,"yq3<:x;":1.670624923818254e+308,"AwD":823,"J2":"","":893};
var argument5 = "c?,&oV*H{";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.268696794505825e+308] = [242,969]
argument7 = ["U","+",":",969,242,"4iXf+U",213,"MP",25,607]
return a/b-c
};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = ["j",126,"U","a","o"]
return a+b-c
};
var argument10 = 242;
var base_0 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"NkaS",25,"<",213,843,"=>",823,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test842.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)