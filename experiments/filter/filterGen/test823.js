





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
base_0 = [-1,122,783]
return a*b/c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][5e-324] = "MDd"
base_1[1]['!cck7Mm'] = {"25":82,"213":"","":"P","5.976730883445392e+307":">","1.0485700963424222e+308":126}
argument6[1.0546776681946723e+308] = null
return a+b-c
};
var argument5 = ["bL*oe",893,"T","*"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.82874486699946e+307] = ["1W","P","qTS)","Y","S","TDpN","O1"]
return a/b/c
};
var argument7 = {"705":"","893":1.5054756551265805e+308,"7.305952014860319e+307":1.6192748375780026e+308,"5.365209660229085e+307":8.265820712619537e+307,"R":969,"yq3<:x;":1.670624923818254e+308,"AwD":823,"J2":"","":893};
var argument8 = "c?,&oV*H{";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = [242,969]
argument10 = ["U","+",":",969,242,"4iXf+U",213,"MP",25,607]
return a/b-c
};
var argument10 = null;
var argument11 = null;
var base_0 = [49,126]
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
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,126]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)