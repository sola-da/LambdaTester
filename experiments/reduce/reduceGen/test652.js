





var callbackArguments = [];
var argument1 = "w";
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = [126,"C",893,"H",403]
argument2[-1] = {"":59,"6.42913703899192e+306":"","o0t":"","-1":"}Xg-","!":""}
argument3[7.889879335222838e+307] = {"242":7.01208214933978e+307,"":1.6038978596897184e+308,"5.737724869058766e+307":59}
return a/b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = null
argument7[90] = ""
base_1[8] = ["-7","-","N","l%","Z","&E","B"]
return a*b/c*d
};
var argument6 = {"1.5430450366042135e+308":1.3712003920350033e+308};
var argument7 = "x";
var argument8 = "0";
var argument9 = "J>-";
var argument10 = 9.684305996867122e+307;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = {"714":"u","":"r"}
return a+b*c+d
};
var argument12 = true;
var argument13 = [157,1.7976931348623157e+308];
var argument14 = 893;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 157
return a+b/c+d
};
var base_0 = [969,607,403,-1,823,49,705,100,-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,607,403,-1,823,49,705,100,-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,607,403,-1,823,49,705,100,-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,607,403,-1,823,49,705,100,-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test652.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)