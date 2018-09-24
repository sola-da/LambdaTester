





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = {"705":25,"M11":5.3253639865751e+307,"":1.5365337553104073e+308,"?":607,"p[":";","J":823}
return a-b+c+d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = ""
argument6[655] = {"59":"","1.1590483757819826e+308":"Z","":1.3908372723276407e+308}
return a/b-c*d
};
var argument5 = "";
var argument6 = null;
var argument7 = 59;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"":1.360354313629395e+308,"1.4830131934493258e+308":-1}
base_2[1] = ""
return a+b+c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {}
argument11[25] = false
argument12[403] = false
return a*b*c/d
};
var base_0 = [783,618,122,893,607,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,618,122,893,607,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,618,122,893,607,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,618,122,893,607,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test567.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)