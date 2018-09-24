





var callbackArguments = [];
var argument1 = "";
var argument2 = false;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = "&d"
argument1[0] = [460,403]
return a*b+c/d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = "K#Ks"
argument5['Cb'] = ["T","i",",",823,-1,"Z[","^dJR",655,82,"F"]
return a*b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"25":"F","893":9.564407301636827e+307,"":"x@","2&":122,"9.482689530698661e+307":""}
argument11[403] = ""
return a/b/c+d
};
var argument10 = 1.0266025536450214e+308;
var argument11 = null;
var argument12 = false;
var argument13 = r_1;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[';N'] = {"25":"k","82":"og]D","122":2.79021680837961e+307,"705":"","7.994806283000054e+307":"","":"","1.2146976449869597e+308":7.693853234556275e+307,"y":":2","ta":126,"$":""}
argument13[1.3938918493123786e+308] = {"403":1.3225083507384393e+308,"655":">&6t","8.722594834077675e+307":"6","1.026126677848664e+308":"D"}
return a-b*c-d
};
var base_0 = [823,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)