





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = false
base_0[0][3] = 157
argument3[59] = null
return a*b*c*d
};
var argument5 = true;
var argument6 = ["!","("];
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = 3.227804599986039e+307
return a/b*c/d
};
var argument9 = false;
var argument10 = null;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7.463432409233234e+307] = true
argument11[595] = ""
argument10[7] = null
return a/b-c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1] = {"25":0,"122":783,"714":"`'j","783":-1,"1.643588661722537e+308":"GnI","":"4","7.969772263373896e+307":1.0367667467396255e+308,"9G":59,"Yp":"","1.3137906822549112e+308":126}
argument13[126] = {}
argument14[1.1277822633002616e+308] = null
return a-b+c*d
};
var argument14 = r_2;
var argument15 = null;
var base_0 = [595,242,823,100,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,242,823,100,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,242,823,100,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,242,823,100,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)