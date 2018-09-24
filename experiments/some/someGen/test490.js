





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = {"705":"","969":3.877485579651811e+307,"1.568476511016184e+308":6.031936639185306e+307,"!!3":618,"1.5601244785262047e+308":126,"":1.6194294518621799e+308}
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = false
base_1[3][3] = [213,655]
return a*b/c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
return a*b/c
};
var argument6 = true;
var argument7 = {"":"","7.492713236828872e+307":893,"-1":"V","y":1.8742793417293475e+307,"=y=":1.5718385565048628e+308,"1.6166255795076769e+308":""};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"403":843,"969":1.0514900138459384e+307,"":1.1045144123891996e+308,"6.134534230778026e+307":"","-100":403,"?":1.1142567323646329e+308}
argument9[1.5109538778533692e+308] = false
return a*b/c
};
var base_0 = ["8","Z","P","E","&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","Z","P","E","&"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","Z","P","E","&"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8","Z","P","E","&"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test490.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)