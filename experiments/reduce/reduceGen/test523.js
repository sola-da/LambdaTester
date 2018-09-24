





var callbackArguments = [];
var argument1 = null;
var argument2 = true;
var argument3 = ["p","&f;Ud"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.331954948603684e+307] = false
argument2[403] = ""
return a*b+c*d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"126":"<","403":893,"8]":"","":1.9795052395342444e+307,"1.7976931348623157e+308":7.1795524042215e+307,"1.2823375672668555e+308":"","j":"MqK","D":"7"}
argument7[7.889879335222838e+307] = "j"
return a-b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ["z","6(&","TF",969]
base_2[2] = "Y"
return a+b-c*d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[403] = ["V","kC",",","nEmV","ta0",")ar","zZ","as)"]
argument12[3] = ["}9",893]
argument10[126] = ""
return a/b*c-d
};
var argument11 = true;
var argument12 = ["!","j"];
var base_0 = ["u*K3uf",82,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u*K3uf",82,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u*K3uf",82,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u*K3uf",82,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test523.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)